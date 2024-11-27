import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ClsModule } from "nestjs-cls";

import configuration from "src/config/app";
import { AuthModule } from "src/services/auth/auth.module";
import { PrismaModule } from "src/services/prisma/prisma.module";
import { AdminModule } from "./admin/admin.module";
import { TenantModule } from "./tenant/tenant.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    AuthModule,
    AdminModule,
    UserModule,
    TenantModule,
    PrismaModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        setup(cls, req) {
          cls.set("tenant-id", req.headers["tenant-id"]);
        },
      },
    }),
  ],
})
export class AppModule {}
