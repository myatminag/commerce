import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { randomBytes } from "crypto";
import { EventEmitter2 } from "@nestjs/event-emitter";

import { User } from "src/generated/prisma";
import { Role } from "src/lib/constants";
import { UserService } from "src/app/user/user.service";
import authConfig from "src/config/auth.config";
import { PrismaService } from "../prisma/prisma.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserSignInDto } from "./dto/user-signin.dto";
import { UserSignUpDto } from "./dto/user-signup.dto";
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
    private prismaService: PrismaService,
    private hashingService: HashingService,
    private eventEmitter: EventEmitter2,
  ) {}

  async signUp(dto: UserSignUpDto, role: Role) {
    try {
      const password = await this.hashingService.hash(dto.password);

      const user = await this.userService.create(
        {
          ...dto,
          password,
        },
        role,
      );

      if (user.role === "user") {
        this.eventEmitter.emitAsync(UserEvent.REGISTERED, {
          name: user.name,
          email: user.email,
        });
      }

      return await this.generateToken(user);
    } catch (err) {
      console.error(err);
      throw new ForbiddenException("Something went wrong!");
    }
  }

  async signIn(dto: UserSignInDto) {
    const user = await this.validateCredentials(dto.email, dto.password);

    return await this.generateToken(user);
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const token = randomBytes(32).toString("hex");
    const hashToken = await this.hashingService.hash(token);

    const expiredAt = new Date(
      Date.now() + this.authConfiguration.resetTokenTtl,
    ).toISOString();

    const user = await this.userService.findByEmail(dto.email);

    await Promise.all([
      this.prismaService.user.update({
        where: { id: user.id },
        data: {
          token: hashToken,
          tokenExpiry: expiredAt,
        },
        omit: { password: true },
      }),
      this.eventEmitter.emitAsync(UserEvent.FORGOT_PASSWORD, {
        email: user.email,
        name: user.name,
      }),
    ]);

    return { token, id: user.id };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id: dto.id },
    });

    const isValid = await this.hashingService.compare(dto.token, user.token);

    if (!user) throw new UnauthorizedException("User not found!");
    if (!isValid) throw new UnauthorizedException("Invalid token!");

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

      if (!user) throw new UnauthorizedException("Bad Request!");

      return await this.generateToken(user);
    } catch {
      throw new UnauthorizedException("Access denied!");
    }
  }

  private async validateCredentials(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException("User not found!");
    }

    const isEqual = await this.hashingService.compare(password, user.password);

    if (!isEqual) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    return user;
  }

  private async generateToken(user: User) {
    const [accessToken, refreskToken] = await Promise.all([
      this.signToken<Partial<ActiveUserData>>(
        user.id,
        this.authConfiguration.accessTokenTtl,
        this.authConfiguration.secret,
        {
          name: user.name,
          email: user.email,
        },
      ),
      this.signToken(
        user.id,
        this.authConfiguration.refreshTokenTtl,
        this.authConfiguration.secret,
      ),
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
