import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";

import { AuthService } from "src/services/auth/auth.service";

@Injectable()
export class AdminLocalStrategy extends PassportStrategy(
  Strategy,
  "admin-jwt",
) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "email",
      passwordField: "password",
    });
  }

  async validate(email: string, password: string) {
    const admin = await this.authService.validateAdminCredentials(
      email,
      password,
    );

    if (!admin) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    return admin;
  }
}
