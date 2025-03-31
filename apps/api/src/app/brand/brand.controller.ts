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
import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { StatusDto } from "./dto/status.dto";
import { DeleteBrandsDto } from "./dto/delete-brands.dto";

@ApiTags("brands")
@Controller("brands")
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post()
  @AdminOnly()
  async create(@Body() dto: CreateBrandDto) {
    return this.brandService.create(dto);
  }

  @Get()
  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
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

  @Delete()
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCategories(@Body() dto: DeleteBrandsDto) {
    return this.brandService.deleteBrands(dto);
  }

  @AdminOnly()
  @Patch(":id/status")
  @HttpCode(HttpStatus.OK)
  async status(@Param("id") id: string, @Body() dto: StatusDto) {
    return this.brandService.status(id, dto);
  }

  @AdminOnly()
  @Put(":id")
  @HttpCode(HttpStatus.CREATED)
  async update(@Param("id") id: string, @Body() dto: UpdateBrandDto) {
    return this.brandService.update(id, dto);
  }

  @AdminOnly()
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string) {
    return this.brandService.delete(id);
  }
}
