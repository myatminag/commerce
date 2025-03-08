import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { JwtService } from "@nestjs/jwt";
import { Admin, User } from "@prisma/client";
import { randomBytes } from "crypto";

import { AdminService } from "src/app/admin/admin.service";
import { UserService } from "src/app/user/user.service";
import authConfig from "src/config/auth.config";
import { UserType } from "src/lib/types";
import { PrismaService } from "../prisma/prisma.service";
import { AdminSignInDto } from "./dto/admin-signin.dto";
import { AdminSignUpDto } from "./dto/admin-signup.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserSignInDto } from "./dto/user-signin.dto";
import { UserSignUpDto } from "./dto/user-signup.dto";
import { AdminEvent } from "./events/admin.event";
import { UserEvent } from "./events/user.event";
import { HashingService } from "./hashing/hashing.service";
import { ActiveUserData } from "./interfaces/active-user.interface";

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY)
    private authConfiguration: ConfigType<typeof authConfig>,
    private jwtService: JwtService,
    private userService: UserService,
    private adminService: AdminService,
    private prismaService: PrismaService,
    private hashingService: HashingService,
    private eventEmitter: EventEmitter2,
  ) {}

  async userSignUp(dto: UserSignUpDto) {
    return this.signUp(dto, "user");
  }

  async userSignIn(dto: UserSignInDto) {
    return this.signIn(dto, "user");
  }

  async userForgotPassword(dto: ForgotPasswordDto) {
    return this.forgotPassword(dto, "user");
  }

  async userResetPassword(dto: ResetPasswordDto) {
    return this.resetPassword(dto, "user");
  }

  async userRefreshToken(dto: RefreshTokenDto) {
    return this.refreshToken(dto, "user");
  }

  async adminSignUp(dto: AdminSignUpDto) {
    return this.signUp(dto, "admin");
  }

  async adminSignIn(dto: AdminSignInDto) {
    return this.signIn(dto, "admin");
  }

  async adminForgotPassword(dto: ForgotPasswordDto) {
    return this.forgotPassword(dto, "admin");
  }

  async adminResetPassword(dto: ResetPasswordDto) {
    return this.resetPassword(dto, "admin");
  }

  async adminRefreshToken(dto: RefreshTokenDto) {
    return this.refreshToken(dto, "admin");
  }

  private async signUp(
    dto: UserSignUpDto | AdminSignUpDto,
    type: "user" | "admin",
  ) {
    try {
      const hashPassword = await this.hashingService.hash(dto.password);

      let entity: User | Admin;

      if (type === "user") {
        entity = await this.userService.create({
          ...(dto as UserSignUpDto),
          password: hashPassword,
        });

        this.eventEmitter.emit(UserEvent.REGISTERED, {
          name: entity.name,
          email: entity.email,
        });
      } else {
        entity = await this.adminService.create({
          ...(dto as AdminSignUpDto),
          password: hashPassword,
        });
      }

      return await this.generateToken(entity, type);
    } catch (err) {
      console.error(err);
      throw new ForbiddenException("Something went wrong!");
    }
  }

  private async signIn(
    dto: UserSignInDto | AdminSignInDto,
    type: "user" | "admin",
  ) {
    let entity: User | Admin;

    if (type === "user") {
      entity = await this.validateCredentials("user", dto.email, dto.password);
    } else {
      entity = await this.validateCredentials("admin", dto.email, dto.password);
    }

    return await this.generateToken(entity, type);
  }

  private async forgotPassword(dto: ForgotPasswordDto, type: "user" | "admin") {
    let entity: User | Admin;

    const token = randomBytes(32).toString("hex");
    const hashToken = await this.hashingService.hash(token);

    const expiredAt = new Date(
      Date.now() + this.authConfiguration.resetTokenTtl,
    ).toISOString();

    if (type === "user") {
      entity = await this.userService.findByEmail(dto.email);

      await this.prismaService.user.update({
        where: { id: entity.id },
        data: {
          token: hashToken,
          tokenExpiry: expiredAt,
        },
        omit: { password: true },
      });

      this.eventEmitter.emit(UserEvent.FORGOT_PASSWORD, {
        email: entity.email,
        name: entity.name,
      });
    } else {
      entity = await this.adminService.findByEmail(dto.email);

      await this.prismaService.admin.update({
        where: { id: entity.id },
        data: {
          token: hashToken,
          tokenExpiry: expiredAt,
        },
        omit: { password: true },
      });

      this.eventEmitter.emit(AdminEvent.FORGOT_PASSWORD, {
        email: entity.email,
        name: entity.name,
      });
    }

    return { token, id: entity.id };
  }

  private async resetPassword(dto: ResetPasswordDto, type: "user" | "admin") {
    let entity: User | Admin;

    if (type === "user") {
      entity = await this.prismaService.user.findUnique({
        where: { id: dto.id },
      });
    } else {
      entity = await this.prismaService.admin.findUnique({
        where: { id: dto.id },
      });
    }

    if (!entity) {
      throw new UnauthorizedException(
        `${type === "user" ? "User" : "Admin"} not found!`,
      );
    }

    const isValid = await this.hashingService.compare(dto.token, entity.token);

    if (!isValid) {
      throw new UnauthorizedException("Invalid token!");
    }

    if (entity.tokenExpiry && entity.tokenExpiry < new Date()) {
      throw new BadRequestException("Token has expired!");
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    if (type === "user") {
      await this.prismaService.$transaction([
        this.prismaService.user.update({
          where: { id: entity.id },
          data: {
            password: hashedPassword,
          },
        }),
        this.prismaService.user.update({
          where: { id: entity.id },
          data: {
            token: null,
            tokenExpiry: null,
          },
        }),
      ]);
    } else {
      await this.prismaService.$transaction([
        this.prismaService.admin.update({
          where: { id: entity.id },
          data: {
            password: hashedPassword,
          },
        }),
        this.prismaService.admin.update({
          where: { id: entity.id },
          data: {
            token: null,
            tokenExpiry: null,
          },
        }),
      ]);
    }

    return { message: "Password successfully updated!" };
  }

  private async refreshToken(dto: RefreshTokenDto, type: "user" | "admin") {
    try {
      let entity: User | Admin;

      if (type === "user") {
        const { sub } = await this.jwtService.verifyAsync<
          Pick<ActiveUserData, "sub">
        >(dto.refreshToken, {
          secret: this.authConfiguration.secret,
        });

        entity = await this.prismaService.user.findUnique({
          where: { id: sub },
        });
      } else {
        const { sub } = await this.jwtService.verifyAsync<
          Pick<ActiveUserData, "sub">
        >(dto.refreshToken, {
          secret: this.authConfiguration.adminSecret,
        });

        entity = await this.prismaService.admin.findUnique({
          where: { id: sub },
        });
      }

      return await this.generateToken(entity, type);
    } catch {
      throw new UnauthorizedException("Access denied!");
    }
  }

  private async validateCredentials(
    type: "user" | "admin",
    email: string,
    password: string,
  ) {
    let entity: User | Admin;

    if (type === "user") {
      entity = await this.prismaService.user.findUnique({
        where: { email },
      });
    } else {
      entity = await this.prismaService.admin.findUnique({
        where: { email },
      });
    }

    if (!entity) {
      throw new UnauthorizedException(
        `${type === "user" ? "User" : "Admin"} not found!`,
      );
    }

    const isEqual = await this.hashingService.compare(
      password,
      entity.password,
    );

    if (!isEqual) {
      throw new UnauthorizedException("Password does not match!");
    }

    return entity;
  }

  private async generateToken(entity: User | Admin, type: UserType) {
    const secret =
      type === "user"
        ? this.authConfiguration.secret
        : this.authConfiguration.adminSecret;

    const [accessToken, refreskToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        entity.id,
        this.authConfiguration.accessTokenTtl,
        secret,
        {
          name: entity.name,
          email: entity.email,
        },
      ),
      this.signToken(entity.id, this.authConfiguration.refreshTokenTtl, secret),
    ]);

    return {
      accessToken,
      refreskToken,
    };
  }

  private signToken<T>(
    userId: string,
    expiresIn: number,
    secret: string,
    payload?: T,
  ) {
    return this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        algorithm: "HS512",
        secret,
        expiresIn,
      },
    );
  }
}
