import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { IsPublic } from "src/services/auth/decorators/is-public.decorator";
import { AuthService } from "./auth.service";
import { IsAdmin } from "./decorators/is-admin.decorator";
import { AdminSignInDto } from "./dto/admin-signin.dto";
import { AdminSignUpDto } from "./dto/admin-signup.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserSignInDto } from "./dto/user-signin.dto";
import { UserSignUpDto } from "./dto/user-signup.dto";
import { AdminRefreshTokenGuard } from "./guards/admin-refresh-token.guard";
import { UserRefreshTokenGuard } from "./guards/user-refresh-token.guard";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Post("sign-up")
  async signUp(@Body() dto: UserSignUpDto) {
    return this.authService.userSignUp(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  async signIn(@Body() dto: UserSignInDto) {
    return this.authService.userSignIn(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.ACCEPTED)
  @Post("forgot-password")
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.userForgotPassword(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post("reset-password")
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.userResetPassword(dto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(UserRefreshTokenGuard)
  @Post("refresh-token")
  async refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.userRefreshToken(dto);
  }

  @IsPublic()
  @Post("sign-up/admin")
  async adminSignUp(@Body() dto: AdminSignUpDto) {
    return this.authService.adminSignUp(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post("sign-in/admin")
  async adminSignIn(@Body() dto: AdminSignInDto) {
    return this.authService.adminSignIn(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.ACCEPTED)
  @Post("forgot-password/admin")
  async adminForgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.adminForgotPassword(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post("reset-password/admin")
  async adminResetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.adminResetPassword(dto);
  }

  @IsAdmin()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminRefreshTokenGuard)
  @Post("refresh-token/admin")
  async adminRefreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.adminRefreshToken(dto);
  }
}
