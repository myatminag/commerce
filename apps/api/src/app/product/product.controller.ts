import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { CreateProductDto } from "./dto/create-product.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { ProductService } from "./product.service";
import { ExcludeNullValueInterceptor } from "src/interceptors/exclude-null.interceptor";

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

  @Get()
  @CacheTTL(3000)
  @UseInterceptors(CacheInterceptor, ExcludeNullValueInterceptor)
  async productLists(@Query() dto: QueryParamsDto) {
    return this.productService.productLists(dto);
  }
}
