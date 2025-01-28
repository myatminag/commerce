import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { compare, genSalt, hash } from "bcrypt";
import { randomBytes } from "crypto";
import * as ms from "ms";

import { PrismaClient } from "@prisma/client/extension";
import { AdminService } from "src/app/admin/admin.service";
import { UserService } from "src/app/user/user.service";
import { AppConfig } from "src/config/type";
import { Role } from "src/types/roles.enum";
import { AdminLoginDto } from "./dto/admin-login.dto";
import { AdminRegisterDto } from "./dto/admin-register.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private adminService: AdminService,
    private configService: ConfigService<AppConfig>,
    @Inject("CONNECTION") private prismaClient: PrismaClient,
  ) {}

  async register(dto: UserRegisterDto) {
    const salt = await genSalt();
    const hashPassword = await hash(dto.password, salt);

    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });

    const token = await this.generateToken(user.id, user.email, Role.User);

    return {
      user,
      token,
    };
  }

  async adminRegister(dto: AdminRegisterDto) {
    const salt = await genSalt();
    const hashPassword = await hash(dto.password, salt);

    const admin = await this.adminService.create({
      ...dto,
      password: hashPassword,
    });

    const token = await this.generateToken(admin.id, admin.email, Role.Admin);

    return {
      admin,
      token,
    };
  }

  async login(dto: UserLoginDto) {
    const user = await this.validateUserCredentials(dto.email, dto.password);

    const token = await this.generateToken(user.id, user.email, Role.User);

    return {
      user,
      token,
    };
  }

  async adminLogin(dto: AdminLoginDto) {
    const admin = await this.validateAdminCredentials(dto.email, dto.password);

    const token = await this.generateToken(admin.id, admin.email, Role.Admin);

    return {
      admin,
      token,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(dto.email);

    const token = randomBytes(32).toString("hex");
    const salt = await genSalt();
    const hashToken = await hash(token, salt);
    const expiredAt = new Date(Date.now() + ms("1h"));

    await this.prismaClient.user.update({
      where: { id: user.id },
      data: {
        reset_token: hashToken,
        expired_at: expiredAt,
      },
      omit: { password: true },
    });

    return { token };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prismaClient.user.findFirst({
      where: { reset_token: { not: null } },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid or expired reset token!");
    }

    if (user.expired_at && user.expired_at < new Date()) {
      throw new BadRequestException("Reset token has expired!");
    }

    const isValid = await compare(dto.token, user.reset_token);

    if (!isValid) {
      throw new UnauthorizedException("Invalid reset token!");
    }

    const salt = await genSalt();
    const hashPassword = await hash(dto.password, salt);

    await this.prismaClient.user.update({
      where: { id: user.id },
      data: {
        password: hashPassword,
        reset_token: null,
        expired_at: null,
      },
    });

    return { message: "Password successfully reset!" };
  }

  async validateUserCredentials(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    delete user.password;

    return user;
  }

  async validateAdminCredentials(email: string, password: string) {
    const admin = await this.adminService.findByEmail(email);

    const isValid = await compare(password, admin.password);

    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    delete admin.password;

    return admin;
  }

  async refreshToken(token: string) {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: this.configService.get("REFRESH_TOKEN_KEY"),
    });

    const { id, email, role } = payload;

    return await this.generateToken(id, email, role);
  }

  async generateToken(id: string, email: string, role: Role) {
    const tokenExpiresIn = this.configService.get("ACCESS_TOKEN_EXPIRES_IN");

    const expiresIn = Date.now() + ms(tokenExpiresIn);

    const [access_token, refresh_token] = await Promise.all([
      await this.jwtService.signAsync(
        { id, email, role },
        {
          secret: this.configService.get("ACCESS_TOKEN_KEY"),
          expiresIn: tokenExpiresIn,
        },
      ),
      await this.jwtService.signAsync(
        { id, email },
        {
          algorithm: "HS512",
          secret: this.configService.get("REFRESH_TOKEN_KEY"),
          expiresIn: this.configService.get("REFRESH_TOKEN_EXPIRES_IN"),
        },
      ),
    ]);

    return {
      access_token,
      refresh_token,
      expires_in: expiresIn,
    };
  }
}
