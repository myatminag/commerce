import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import configuration from "src/config/config";
import { AuthModule } from "src/services/auth/auth.module";
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
    ProductModule,
    PrismaModule,
    S3Module,
    RedisCacheModule,
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
