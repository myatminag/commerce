import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/app/user/user.module";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { LocalStrategy } from "src/strategies/local.strategy";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_TOKEN_KEY,
      signOptions: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AuthModule {}
