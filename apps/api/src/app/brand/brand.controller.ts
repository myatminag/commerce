import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { QueryParamsDto } from "./dto/query-params.dto";

@ApiTags("brands")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("brands")
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post()
  async create(@Body() dto: CreateBrandDto) {
    return this.brandService.create(dto);
  }

  @Get()
  async getAll(@Query() dto: QueryParamsDto) {
    return this.brandService.getAll(dto);
  }

  @Get(":slug")
  async findBySlug(@Param("slug") slug: string) {
    return this.brandService.findBySlug(slug);
  }

  @Delete(":slug")
  async delete(@Param("slug") slug: string) {
    return this.brandService.delete(slug);
  }
}
