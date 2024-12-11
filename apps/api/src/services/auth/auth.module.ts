import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AdminModule } from "src/app/admin/admin.module";
import { UserModule } from "src/app/user/user.module";
// import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { RolesGuard } from "src/guards/roles.guard";
import { AdminLocalStrategy } from "src/strategies/admin-local.strategy";
import { JwtTokenStrategy } from "src/strategies/jwt-token.strategy";
import { RefreshTokenStrategy } from "src/strategies/refresh-token.strategy";
import { UserLocalStrategy } from "src/strategies/user-local.strategy";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    UserModule,
    AdminModule,
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
    UserLocalStrategy,
    AdminLocalStrategy,
    JwtTokenStrategy,
    RefreshTokenStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
