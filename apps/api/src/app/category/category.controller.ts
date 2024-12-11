import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { CategoryService } from "./category.service";
import { CreateMainCategoryDto } from "./dto/create-category.dto";
import { CreateSubCategoryDto } from "./dto/create-subcategory.dto";
import { DeleteCategoriesDto } from "./dto/delete-categories.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdateMainCategoryDto } from "./dto/update-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-subcategory.dto";

@ApiTags("categories")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("categories")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async createMainCategory(@Body() dto: CreateMainCategoryDto) {
    return this.categoryService.createMainCategory(dto);
  }

  @Post("sub-category")
  async createSubCategory(@Body() dto: CreateSubCategoryDto) {
    return this.categoryService.createSubCategory(dto);
  }

  @Get()
  async getAllCategories(@Query() dto: QueryParamsDto) {
    return this.categoryService.getAllCategories(dto);
  }

  @Get(":slug")
  async getDetailsBySlug(@Param("slug") slug: string) {
    return this.categoryService.getDetailsBySlug(slug);
  }

  @Put(":slug")
  async updateMainCategory(
    @Param("slug") slug: string,
    @Body() dto: UpdateMainCategoryDto,
  ) {
    return this.categoryService.updateMainCategory(slug, dto);
  }

  @Put("/sub-category/:slug")
  async updateSubCategory(
    @Param("slug") slug: string,
    @Body() dto: UpdateSubCategoryDto,
  ) {
    return this.categoryService.updateSubCategory(slug, dto);
  }

  @Delete(":slug")
  async deleteCategory(@Param("slug") slug: string) {
    return this.categoryService.deleteCategory(slug);
  }

  @Delete()
  async deleteMainCategories(@Body() dto: DeleteCategoriesDto) {
    return this.categoryService.deleteMainCategories(dto);
  }
}
