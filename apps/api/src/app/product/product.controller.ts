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
  UseInterceptors,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { ExcludeNullValueInterceptor } from "src/interceptors/exclude-null.interceptor";
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
  @UseInterceptors(ExcludeNullValueInterceptor)
  async productDetails(@Param("slug") slug: string) {
    return this.productService.productDetails(slug);
  }

  @Get()
  @UseInterceptors(ExcludeNullValueInterceptor)
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
