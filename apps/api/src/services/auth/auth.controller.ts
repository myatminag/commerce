import {
  Body,
  Controller,
  ForbiddenException,
  Headers,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { IsPublic } from "src/decorators/is-public.decorator";
import { AdminAuthGuard } from "src/guards/admin-auth.guard";
import { RefreshTokenGuard } from "src/guards/refresh-token.guard";
import { UserAuthGuard } from "src/guards/user-auth.guard";
import { AuthService } from "./auth.service";
import { AdminLoginDto } from "./dto/admin-login.dto";
import { AdminRegisterDto } from "./dto/admin-register.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";

@ApiTags("auth")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Post("/register")
  async register(@Body() dto: UserRegisterDto) {
    return this.authService.register(dto);
  }

  @IsPublic()
  @Post("/login")
  @UseGuards(UserAuthGuard)
  async login(@Body() dto: UserLoginDto) {
    return this.authService.login(dto);
  }

  @IsPublic()
  @Post("/forgot-password")
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @IsPublic()
  @Post("/reset-password")
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @IsPublic()
  @Post("/register/admin")
  async adminRegister(@Body() dto: AdminRegisterDto) {
    return this.authService.adminRegister(dto);
  }

  @IsPublic()
  @Post("/login/admin")
  @UseGuards(AdminAuthGuard)
  async adminLogin(@Body() dto: AdminLoginDto) {
    return this.authService.adminLogin(dto);
  }

  @IsPublic()
  @Post("/refresh-token")
  @UseGuards(RefreshTokenGuard)
  async refreshToken(@Headers("authorization") authorization: string) {
    if (!authorization) {
      throw new ForbiddenException("Authorization header missing!");
    }

    const token = authorization.replace("Bearer", "").trim();

    return this.authService.refreshToken(token);
  }
}
