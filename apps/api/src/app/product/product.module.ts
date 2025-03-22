import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bullmq";

import { PrismaModule } from "src/services/prisma/prisma.module";
import { RedisCacheModule } from "src/services/redis-cache/redis-cache.module";
import { ProductController } from "./product.controller";
import { ProductProcessor } from "./product.processor";
import { ProductService } from "./product.service";
import { QueueProcessor } from "src/lib/constants";

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: QueueProcessor.ProductQueue,
    }),
    RedisCacheModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductProcessor],
})
export class ProductModule {}
