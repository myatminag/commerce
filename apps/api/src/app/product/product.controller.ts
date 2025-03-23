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
  Put,
  Query,
} from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";

import { AdminOnly } from "src/decorators/admin-only.decorator";
import {
  ApiPagination,
  Pagination,
  PaginationParams,
} from "src/decorators/pagination.decorator";
import { IsPublic } from "src/services/auth/decorators/is-public.decorator";
import { CreateProductDto } from "./dto/create-product.dto";
import { DeleteProductsDto } from "./dto/delete-products.dto";
import { DiscountProductDto } from "./dto/discount-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./product.service";

@IsPublic()
@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @AdminOnly()
  async create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
  async getProducts(
    @PaginationParams() pagination: Pagination,
    @Query("search") search?: string,
  ) {
    return this.productService.getProducts(pagination, search);
  }

  @AdminOnly()
  @Patch("discount")
  @HttpCode(HttpStatus.CREATED)
  async discount(@Body() dto: DiscountProductDto) {
    return this.productService.discount(dto);
  }

  @Delete()
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteMany(@Body() dto: DeleteProductsDto) {
    return this.productService.deleteMany(dto);
  }

  @Get(":slug")
  async findBySlug(@Param("slug") slug: string) {
    return this.productService.findBySlug(slug);
  }

  @Put(":id")
  @AdminOnly()
  @HttpCode(HttpStatus.CREATED)
  async updateProduct(@Param("id") id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(":id")
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string) {
    return this.productService.delete(id);
  }
}
