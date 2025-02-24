import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Admin, User } from "@prisma/client";
import { randomBytes } from "crypto";

import { UserService } from "src/app/user/user.service";
import authConfig from "src/config/auth.config";
import { UserType } from "src/lib/types";
import { PrismaService } from "../prisma/prisma.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserSignUpDto } from "./dto/user-signup.dto";
import { HashingService } from "./hashing/hashing.service";
import { ActiveUserData } from "./interfaces/active-user.interface";

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY)
    private authConfiguration: ConfigType<typeof authConfig>,
    private jwtService: JwtService,
    private userService: UserService,
    private prismaService: PrismaService,
    private hashingService: HashingService,
  ) {}

  async signUp(dto: UserSignUpDto) {
    const hashPassword = await this.hashingService.hash(dto.password);

    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });

    return await this.generateToken(user, "user");
  }

  async signIn(dto: UserLoginDto) {
    const user = await this.validateCredentials(
      "user",
      dto.email,
      dto.password,
    );

    return await this.generateToken(user, "user");
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.userService.findByEmail(dto.email);

    const token = randomBytes(32).toString("hex");
    const hashToken = await this.hashingService.hash(token);

    const expiredAt = new Date(
      Date.now() + this.authConfiguration.resetTokenTtl,
    ).toISOString();

    await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        token: hashToken,
        tokenExpiry: expiredAt,
      },
      omit: { password: true },
    });

    return { token, id: user.id };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id: dto.id },
    });

    if (!user) {
      throw new UnauthorizedException("User not found!");
    }

    const isValid = await this.hashingService.compare(dto.token, user.token);

    if (!isValid) {
      throw new UnauthorizedException("Invalid token!");
    }

    if (user.tokenExpiry && user.tokenExpiry < new Date()) {
      throw new BadRequestException("Token has expired!");
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    await this.prismaService.$transaction([
      this.prismaService.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
        },
      }),
      this.prismaService.user.update({
        where: { id: user.id },
        data: {
          token: null,
          tokenExpiry: null,
        },
      }),
    ]);

    return { message: "Password successfully updated!" };
  }

  async refreshToken(dto: RefreshTokenDto) {
    try {
      const { sub } = await this.jwtService.verifyAsync<
        Pick<ActiveUserData, "sub">
      >(dto.refreshToken, {
        secret: this.authConfiguration.secret,
      });

      const user = await this.prismaService.user.findUnique({
        where: { id: sub },
      });

      return await this.generateToken(user, "user");
    } catch {
      throw new UnauthorizedException("Access denied!");
    }
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

  async generateToken(user: User | Admin, type: UserType) {
    const [accessToken, refreskToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.authConfiguration.accessTokenTtl,
        {
          name: user.name,
          email: user.email,
          type,
        },
      ),
      this.signToken(user.id, this.authConfiguration.refreshTokenTtl),
    ]);

    return {
      accessToken,
      refreskToken,
    };
  }

  private signToken<T>(userId: string, expiresIn: number, payload?: T) {
    return this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        algorithm: "HS512",
        secret: this.authConfiguration.secret,
        expiresIn,
      },
    );
  }
}
