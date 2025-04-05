import { Module } from "@nestjs/common";

import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { GenerateIdService } from "./generate-id/generate-id.service";
import { RedisCacheModule } from "src/services/redis-cache/redis-cache.module";

@Module({
  imports: [RedisCacheModule],
  providers: [
    OrderService,
    {
      provide: GenerateIdService,
      useClass: GenerateIdService,
    },
  ],
  controllers: [OrderController],
})
export class OrderModule {}
