import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@ApiTags("products")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Get(":slug")
  async productDetails(@Param("slug") slug: string) {
    return this.productService.productDetails(slug);
  }
}
