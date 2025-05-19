import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigType } from "@nestjs/config";

import authConfig from "src/config/auth.config";
import { ActiveUserData } from "../interfaces/active-user.interface";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  "access-token",
) {
  constructor(
    @Inject(authConfig.KEY)
    private authConfiguration: ConfigType<typeof authConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authConfiguration.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: ActiveUserData) {
    return payload;
  }
}
