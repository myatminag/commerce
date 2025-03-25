import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";

import { BullModule } from "@nestjs/bullmq";
import redisConfig from "src/config/redis.config";
import { AuthModule } from "src/services/auth/auth.module";
import { MailModule } from "src/services/mail/mail.module";
import { PrismaModule } from "src/services/prisma/prisma.module";
import { RedisCacheModule } from "src/services/redis-cache/redis-cache.module";
import { S3Module } from "src/services/s3/s3.module";
import { AdminModule } from "./admin/admin.module";
import { BrandModule } from "./brand/brand.module";
import { CategoryModule } from "./category/category.module";
import { OrderModule } from "./order/order.module";
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
    OrderModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
    BullModule.forRootAsync({
      inject: [redisConfig.KEY],
      imports: [ConfigModule.forFeature(redisConfig)],
      useFactory: (redisConfiguration: ConfigType<typeof redisConfig>) => ({
        connection: {
          host: redisConfiguration.REDIS_HOST,
          port: Number(redisConfiguration.REDIS_PORT),
          username: redisConfiguration.REDIS_USERNAME,
          password: redisConfiguration.REDIS_PASSWORD,
        },
      }),
    }),
  ],
})
export class AppModule {}
