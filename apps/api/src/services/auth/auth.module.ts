import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AdminModule } from "src/app/admin/admin.module";
import { UserModule } from "src/app/user/user.module";
import authConfig from "src/config/auth.config";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { BcryptService } from "./hashing/bcrypt.service";
import { HashingService } from "./hashing/hashing.service";
import { AdminAccessTokenStrategy } from "./strategies/admin-access-token.strategy";
import { AdminRefreshTokenStrategy } from "./strategies/admin-refresh-token.strategy";
import { UserAccessTokenStrategy } from "./strategies/user-access-token.strategy";
import { UserRefreshTokenStrategy } from "./strategies/user-refresh-token.strategy";

@Module({
  imports: [
    UserModule,
    AdminModule,
    PrismaModule,
    PassportModule,
    ConfigModule.forFeature(authConfig),
    JwtModule.registerAsync(authConfig.asProvider()),
  ],
  providers: [
    AuthService,
    AdminAccessTokenStrategy,
    AdminRefreshTokenStrategy,
    UserAccessTokenStrategy,
    UserRefreshTokenStrategy,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
