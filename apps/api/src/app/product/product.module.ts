import { Module } from "@nestjs/common";

import { PrismaModule } from "src/services/prisma/prisma.module";
import { RedisCacheModule } from "src/services/redis-cache/redis-cache.module";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [PrismaModule, RedisCacheModule],
})
export class ProductModule {}
