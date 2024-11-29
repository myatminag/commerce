import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

interface Payload {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

@Injectable()
export class JwtTokenStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.ACCESS_TOKEN_KEY,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    return { id: payload.id, email: payload.email, role: payload.role };
  }
}
