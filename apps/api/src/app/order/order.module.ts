import { Module } from "@nestjs/common";

import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { GenerateIdService } from "./generate-id/generate-id.service";

@Module({
  imports: [],
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
