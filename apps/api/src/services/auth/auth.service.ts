import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { compare, genSalt, hash } from "bcrypt";
import { randomBytes } from "crypto";
import * as ms from "ms";
import { Admin, User } from "@prisma/client";

import { AdminService } from "src/app/admin/admin.service";
import { UserService } from "src/app/user/user.service";
import jwtConfig from "src/config/jwt.config";
import { ActiveAdminType, ActiveUserType } from "src/types/user.type";
import { PrismaService } from "../prisma/prisma.service";
import { AdminLoginDto } from "./dto/admin-login.dto";
import { AdminRegisterDto } from "./dto/admin-register.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserSignUpDto } from "./dto/user-signup.dto";
import { HashingService } from "./hashing/hashing.service";

@Injectable()
export class AuthService {
  constructor(
    @Inject(jwtConfig.KEY)
    private jwtConfiguration: ConfigType<typeof jwtConfig>,
    private jwtService: JwtService,
    private userService: UserService,
    private adminService: AdminService,
    private prismaService: PrismaService,
    private hashingService: HashingService,
  ) {}

  async signUp(dto: UserSignUpDto) {
    const hashPassword = await this.hashingService.hash(dto.password);

    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });

    return await this.generateToken(user);
  }

  async signIn(dto: UserLoginDto) {
    const user = await this.validateCredentials(
      "user",
      dto.email,
      dto.password,
    );

    return await this.generateToken(user);
  }

  async adminRegister(dto: AdminRegisterDto) {
    const salt = await genSalt();
    const hashPassword = await hash(dto.password, salt);

    const admin = await this.adminService.create({
      ...dto,
      password: hashPassword,
    });

    const token = await this.generateToken(admin);

    return {
      admin,
      token,
    };
  }

  async adminLogin(dto: AdminLoginDto) {}

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(dto.email);

    const token = randomBytes(32).toString("hex");
    const salt = await genSalt();
    const hashToken = await hash(token, salt);
    const expiredAt = new Date(Date.now() + ms("1h"));

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        token: hashToken,
        tokenExpiry: expiredAt,
      },
      omit: { password: true },
    });

    return { token };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prismaService.user.findFirst({
      where: { token: { not: null } },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid or expired reset token!");
    }

    if (user.tokenExpiry && user.tokenExpiry < new Date()) {
      throw new BadRequestException("Reset token has expired!");
    }

    const isValid = await compare(dto.token, user.token);

    if (!isValid) {
      throw new UnauthorizedException("Invalid reset token!");
    }

    const salt = await genSalt();
    const hashPassword = await hash(dto.password, salt);

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        password: hashPassword,
      },
    });

    return { message: "Password successfully reset!" };
  }

  async refreshToken(token: string) {
    const payload = await this.jwtService.verifyAsync(token, {
      secret: this.jwtConfiguration.secret,
    });

    // const { id, email, role } = payload;

    // return await this.generateToken();
  }

  async validateCredentials(
    type: "user" | "admin",
    email: string,
    password: string,
  ) {
    let userOrAdmin: User | Admin;

    if (type === "user") {
      userOrAdmin = await this.prismaService.user.findUnique({
        where: { email },
      });
    } else {
      userOrAdmin = await this.prismaService.admin.findUnique({
        where: { email },
      });
    }

    if (!userOrAdmin) {
      throw new UnauthorizedException(
        `${type === "user" ? "User" : "Admin"} does not exist!`,
      );
    }

    const isEqual = await this.hashingService.compare(
      password,
      userOrAdmin.password,
    );

    if (!isEqual) {
      throw new UnauthorizedException("Password does not match!");
    }

    return userOrAdmin;
  }

  async generateToken(user: ActiveUserType | ActiveAdminType) {
    const [accessToken, refreskToken] = await Promise.all([
      this.signToken<Partial<ActiveUserType & ActiveAdminType>>(
        user.id,
        this.jwtConfiguration.accessTokenTtl,
        {
          name: user.name,
          phone: user.phone,
          email: user.email,
        },
      ),
      this.signToken(user.id, this.jwtConfiguration.refreshTokenTtl),
    ]);

    return {
      accessToken,
      refreskToken,
    };
  }

  private signToken<T>(userId: string, expiresIn: string, payload?: T) {
    return this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        algorithm: "HS512",
        secret: this.jwtConfiguration.secret,
        expiresIn,
      },
    );
  }
}
