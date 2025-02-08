import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Scope,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./product.service";

@ApiTags("products")
@ApiHeader({ name: "tenant-id", required: true })
@Controller({
  path: "products",
  scope: Scope.REQUEST,
})
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() dto: any) {
    return this.productService.createProduct(dto);
  }

  @Get(":slug")
  async productDetails(@Param("slug") slug: string) {
    return this.productService.productDetails(slug);
  }

  @Get()
  async productLists(@Query() dto: QueryParamsDto) {
    return this.productService.productLists(dto);
  }

  @Put(":id")
  async updateProduct(@Param("id") id: string, @Body() dto: UpdateProductDto) {
    return this.productService.updateProduct(id, dto);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return this.productService.deleteProduct(id);
  }
}
