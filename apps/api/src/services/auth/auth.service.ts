import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { genSalt, hash, compare } from "bcrypt";
import { randomBytes } from "crypto";
import ms from "ms";

import { AppConfig } from "src/config/type";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserService } from "src/app/user/user.service";
import { PrismaService } from "../prisma/prisma.service";
import { UserRegisterDto } from "./dto/user-register.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private prismaService: PrismaService,
    private configService: ConfigService<AppConfig>,
  ) {}

  async register(dto: UserRegisterDto) {
    const salt = await genSalt();
    const hashPassword = await hash(dto.password, salt);

    return await this.userService.create({
      ...dto,
      password: hashPassword,
    });
  }

  async login(dto: UserLoginDto) {
    const user = await this.validateCredentials(dto.email, dto.password);

    const token = await this.generateToken(user.id, user.email);

    return {
      user,
      token,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(dto.email);

    const token = randomBytes(32).toString("hex");
    const salt = await genSalt();
    const hashToken = await hash(token, salt);
    const expiredAt = new Date(Date.now() + ms("1h"));

    await this.prismaService.instance.user.update({
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
    const user = await this.prismaService.instance.user.findFirst({
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

    await this.prismaService.instance.user.update({
      where: { id: user.id },
      data: {
        password: hashPassword,
        reset_token: null,
        expired_at: null,
      },
    });

    return { message: "Password successfully reset!" };
  }

  async adminLogin() {}

  async validateCredentials(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    const isValid = await compare(password, user.password);

    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    delete user.password;

    return user;
  }

  async generateToken(id: string, email: string) {
    const tokenExpiresIn = this.configService.get("ACCESS_TOKEN_EXPIRES_IN");

    const expiresIn = Date.now() + ms(tokenExpiresIn);

    const [access_token, refresh_token] = await Promise.all([
      await this.jwtService.signAsync(
        { id, email },
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
