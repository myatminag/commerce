import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Scope,
  UseGuards,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { TenantGuard } from "src/guards/tenant.guard";
import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { QueryParamsDto } from "./dto/query-params.dto";

@ApiTags("brands")
@ApiHeader({ name: "tenant-id", required: true })
@UseGuards(TenantGuard)
@Controller({
  path: "brands",
  scope: Scope.REQUEST,
})
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
