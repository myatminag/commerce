import Joi from "joi";
import { ClsModule } from "nestjs-cls";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { UserModule } from "./user/user.module";
import { TenantModule } from "./tenant/tenant.module";
import { PrismaModule } from "src/services/prisma/prisma.module";

@Module({
  imports: [
    UserModule,
    PrismaModule,
    TenantModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
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
