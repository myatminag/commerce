import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";

import { AuthModule } from "src/services/auth/auth.module";
import { MailModule } from "src/services/mail/mail.module";
import { PrismaModule } from "src/services/prisma/prisma.module";
import { RedisCacheModule } from "src/services/redis-cache/redis-cache.module";
import { S3Module } from "src/services/s3/s3.module";
import { AdminModule } from "./admin/admin.module";
import { BrandModule } from "./brand/brand.module";
import { CategoryModule } from "./category/category.module";
import { ProductModule } from "./product/product.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    AuthModule,
    AdminModule,
    BrandModule,
    CategoryModule,
    MailModule,
    ProductModule,
    PrismaModule,
    S3Module,
    RedisCacheModule,
    UserModule,

    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
