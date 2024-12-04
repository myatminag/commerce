import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";

import { AuthService } from "src/services/auth/auth.service";

@Injectable()
export class UserLocalStrategy extends PassportStrategy(Strategy, "user-jwt") {
  constructor(private authService: AuthService) {
    super({
      usernameField: "email",
      passwordField: "password",
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUserCredentials(
      email,
      password,
    );

    if (!user) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    return user;
  }
}
