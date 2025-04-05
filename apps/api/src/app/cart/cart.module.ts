import { Module } from "@nestjs/common";

import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { RedisCacheModule } from "src/services/redis-cache/redis-cache.module";

@Module({
  imports: [RedisCacheModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
