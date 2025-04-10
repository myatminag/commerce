import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { ActiveUser } from "src/services/auth/decorators/active-user.decorator";
import { ActiveUserData } from "src/services/auth/interfaces/active-user.interface";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";

@ApiTags("cart")
@Controller("cart")
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  async add(
    @ActiveUser() activeUser: ActiveUserData,
    @Body() dto: CreateCartDto,
  ) {
    return this.cartService.add(activeUser.sub, dto);
  }

  @Get()
  async getCart(@ActiveUser() activeUser: ActiveUserData) {
    return this.cartService.getCart(activeUser.sub);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCart(@ActiveUser() activeUser: ActiveUserData) {
    return this.cartService.deleteCart(activeUser.sub);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  async update(
    @Body() dto: UpdateCartDto,
    @ActiveUser() activeUser: ActiveUserData,
    @Query("action") action: "increase" | "decrease",
  ) {
    return this.cartService.updateItemQuantity(activeUser.sub, dto, action);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeCartItem(
    @Param("id") id: string,
    @ActiveUser() activeUser: ActiveUserData,
  ) {
    return this.cartService.removeCartItem(activeUser.sub, id);
  }
}
