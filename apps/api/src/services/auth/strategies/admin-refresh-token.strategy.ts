import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import authConfig from "src/config/auth.config";
import { ActiveUserData } from "../interfaces/active-user.interface";

@Injectable()
export class AdminRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  "admin-refresh-token",
) {
  constructor(
    @Inject(authConfig.KEY)
    private authConfiguration: ConfigType<typeof authConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authConfiguration.adminSecret,
      passReqToCallback: true,
    });
  }

  async validate(payload: ActiveUserData) {
    return payload;
  }
}
