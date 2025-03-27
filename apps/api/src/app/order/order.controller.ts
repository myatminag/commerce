import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { OrderService } from "./order.service";
import { IsPublic } from "src/services/auth/decorators/is-public.decorator";

@IsPublic()
@ApiTags("orders")
@Controller("orders")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async create() {
    return this.orderService.create();
  }
}
