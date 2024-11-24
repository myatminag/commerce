import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";
import { LocalAuthGuard } from "src/guards/local-auth.guard";
import { IsPublic } from "src/decorators/is-public.decorator";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

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
  @UseGuards(LocalAuthGuard)
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
}
