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
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

import {
  ApiPagination,
  Pagination,
  PaginationParams,
} from "src/decorators/pagination.decorator";
import { IsAdmin } from "src/services/auth/decorators/is-admin.decorator";
import { IsPublic } from "src/services/auth/decorators/is-public.decorator";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateSubCategoryDto } from "./dto/create-subcategory.dto";
import { DeleteCategoriesDto } from "./dto/delete-categories.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-subcategory.dto";

@IsPublic()
@ApiTags("categories")
@Controller("categories")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @Post()
  async createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @Post("sub-category")
  async createSubCategory(@Body() dto: CreateSubCategoryDto) {
    return this.categoryService.createSubCategory(dto);
  }

  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
  @Get()
  async getAllCategories(
    @PaginationParams() pagination: Pagination,
    @Query("search") search?: string,
  ) {
    return this.categoryService.getCategories(pagination, search);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.CREATED)
  @Put("sub-category/:id")
  async updateSubCategory(
    @Param("id") id: string,
    @Body() dto: UpdateSubCategoryDto,
  ) {
    return this.categoryService.updateSubCategory(id, dto);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  async deleteCategories(@Body() dto: DeleteCategoriesDto) {
    return this.categoryService.deleteCategories(dto);
  }

  @Get(":slug")
  async findBySlug(@Param("slug") slug: string) {
    return this.categoryService.findBySlug(slug);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.CREATED)
  @Put(":id")
  async updateCategory(
    @Param("id") id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, dto);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  async deleteCategory(@Param("id") id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
