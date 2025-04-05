import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { ActiveUser } from "src/services/auth/decorators/active-user.decorator";
import { ActiveUserData } from "src/services/auth/interfaces/active-user.interface";

@ApiTags("cart")
@Controller("cart")
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  async create(
    @ActiveUser() activeUser: ActiveUserData,
    @Body() dto: CreateCartDto,
  ) {
    return this.cartService.create(activeUser.sub, dto);
  }

  @Get()
  async getCart(@ActiveUser() activeUser: ActiveUserData) {
    return this.cartService.getCart(activeUser.sub);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeCart(@ActiveUser() activeUser: ActiveUserData) {
    return this.cartService.removeCart(activeUser.sub);
  }

  @Patch()
  @HttpCode(HttpStatus.CREATED)
  async updateCart(@ActiveUser() activeUser: ActiveUserData) {
    return this.cartService.updateCart(activeUser.sub);
  }
}
