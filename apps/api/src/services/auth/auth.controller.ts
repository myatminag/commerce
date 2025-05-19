import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Role } from "src/lib/constants";
import { IsPublic } from "src/services/auth/decorators/is-public.decorator";
import { AuthService } from "./auth.service";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { UserSignInDto } from "./dto/user-signin.dto";
import { UserSignUpDto } from "./dto/user-signup.dto";
import { RefreshTokenGuard } from "./guards/refresh-token.guard";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @IsPublic()
  @Post("sign-up")
  async signUp(@Body() dto: UserSignUpDto) {
    return this.authService.signUp(dto, Role.User);
  }

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  async signIn(@Body() dto: UserSignInDto) {
    return this.authService.signIn(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.ACCEPTED)
  @Post("forgot-password")
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post("reset-password")
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(RefreshTokenGuard)
  @Post("refresh-token")
  async refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto);
  }

  @IsPublic()
  @Post("sign-up/admin")
  async adminSignUp(@Body() dto: UserSignUpDto) {
    return this.authService.signUp(dto, Role.Admin);
  }

  @IsPublic()
  @HttpCode(HttpStatus.OK)
  @Post("sign-in/admin")
  async adminSignIn(@Body() dto: UserSignInDto) {
    return this.authService.signIn(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.ACCEPTED)
  @Post("forgot-password/admin")
  async adminForgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post("reset-password/admin")
  async adminResetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(RefreshTokenGuard)
  @Post("refresh-token/admin")
  async adminRefreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto);
  }
}
