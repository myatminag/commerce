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
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

import {
  ApiPagination,
  Pagination,
  PaginationParams,
} from "src/decorators/pagination.decorator";
import { IsAdmin } from "src/services/auth/decorators/is-admin.decorator";
import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";

@ApiTags("brands")
@Controller("brands")
export class BrandController {
  constructor(private brandService: BrandService) {}

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @Post()
  async create(@Body() dto: CreateBrandDto) {
    return this.brandService.create(dto);
  }

  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
  @Get()
  async getBrands(
    @PaginationParams() pagination: Pagination,
    @Query("search") search?: string,
  ) {
    return this.brandService.getBrands(pagination, search);
  }

  @Get(":slug")
  async findBySlug(@Param("slug") slug: string) {
    return this.brandService.findBySlug(slug);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.CREATED)
  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateBrandDto) {
    return this.brandService.update(id, dto);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.brandService.delete(id);
  }
}
