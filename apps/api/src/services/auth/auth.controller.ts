import {
  Body,
  Controller,
  ForbiddenException,
  Headers,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";

import { IsPublic } from "src/decorators/is-public.decorator";
import { RolesGuard } from "src/guards/roles.guard";
import { AuthService } from "./auth.service";
import { AdminLoginDto } from "./dto/admin-login.dto";
import { AdminRegisterDto } from "./dto/admin-register.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";

@ApiTags("auth")
@UseGuards(RolesGuard)
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
  @UseGuards(AuthGuard("user-jwt"))
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
  @Post("/refresh-token")
  @UseGuards(AuthGuard("refresh-token"))
  async refreshToken(@Headers("authorization") authorization: string) {
    if (!authorization) {
      throw new ForbiddenException("Authorization header missing!");
    }

    const token = authorization.replace("Bearer", "").trim();

    return this.authService.refreshToken(token);
  }

  @IsPublic()
  @Post("/register/admin")
  async adminRegister(@Body() dto: AdminRegisterDto) {
    return this.authService.adminRegister(dto);
  }

  @IsPublic()
  @Post("/login/admin")
  @UseGuards(AuthGuard("admin-jwt"))
  async adminLogin(@Body() dto: AdminLoginDto) {
    return this.authService.adminLogin(dto);
  }
}
