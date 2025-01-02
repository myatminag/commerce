import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { ExcludeNullValueInterceptor } from "src/interceptors/exclude-null.interceptor";
import { CreateProductDto } from "./dto/create-product.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
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
  @UseInterceptors(CacheInterceptor, ExcludeNullValueInterceptor)
  async productDetails(@Param("slug") slug: string) {
    return this.productService.productDetails(slug);
  }

  @Get()
  @CacheTTL(3000)
  @UseInterceptors(CacheInterceptor, ExcludeNullValueInterceptor)
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
