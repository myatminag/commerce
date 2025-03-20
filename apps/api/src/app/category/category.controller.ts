import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
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
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateSubCategoryDto } from "./dto/create-subcategory.dto";
import { DeleteCategoriesDto } from "./dto/delete-categories.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-subcategory.dto";

@ApiTags("categories")
@Controller("categories")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @AdminOnly()
  async createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }

  @AdminOnly()
  @Post("sub-category")
  async createSubCategory(@Body() dto: CreateSubCategoryDto) {
    return this.categoryService.createSubCategory(dto);
  }

  @Get()
  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
  async getAllCategories(
    @PaginationParams() pagination: Pagination,
    @Query("search") search?: string,
  ) {
    return this.categoryService.getCategories(pagination, search);
  }

  @AdminOnly()
  @Put("sub-category/:id")
  @HttpCode(HttpStatus.CREATED)
  async updateSubCategory(
    @Param("id") id: string,
    @Body() dto: UpdateSubCategoryDto,
  ) {
    return this.categoryService.updateSubCategory(id, dto);
  }

  @Delete()
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCategories(@Body() dto: DeleteCategoriesDto) {
    return this.categoryService.deleteCategories(dto);
  }

  @Get(":slug")
  async findBySlug(@Param("slug") slug: string) {
    return this.categoryService.findBySlug(slug);
  }

  @Put(":id")
  @AdminOnly()
  @HttpCode(HttpStatus.CREATED)
  async updateCategory(
    @Param("id") id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, dto);
  }

  @AdminOnly()
  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteCategory(@Param("id") id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
