import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import Joi from "joi";

import { TenantModule } from "./tenant/tenant.module";
import { PrismaModule } from "src/services/prisma/prisma.module";

@Module({
  imports: [
    PrismaModule,
    TenantModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
