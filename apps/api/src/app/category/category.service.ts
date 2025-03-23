import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { Pagination } from "src/decorators/pagination.decorator";
import { slugify } from "src/lib/utils";
import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateSubCategoryDto } from "./dto/create-subcategory.dto";
import { DeleteCategoriesDto } from "./dto/delete-categories.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-subcategory.dto";

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async createCategory(dto: CreateCategoryDto) {
    const slug = slugify(dto.name);

    const category = await this.prismaService.category.findUnique({
      where: {
        slug,
      },
    });

    if (category) {
      throw new ConflictException("Category already exists!");
    }

    return await this.prismaService.category.create({
      data: {
        slug,
        ...dto,
      },
      omit: {
        parentId: true,
      },
    });
  }

  async createSubCategory(dto: CreateSubCategoryDto) {
    const slugs = dto.names.map(slugify);

    const [category, subcategories] = await Promise.all([
      this.prismaService.category.findUnique({
        where: { id: dto.parentId },
        select: { id: true },
      }),
      this.prismaService.category.findMany({
        where: { slug: { in: slugs } },
        select: { name: true },
      }),
    ]);

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    if (subcategories.length > 0) {
      throw new ConflictException(`Sub category already exists!`);
    }

    const subCategories = dto.names.map((name) => ({
      name,
      slug: slugify(name),
      parentId: dto.parentId,
    }));

    return await this.prismaService.category.createManyAndReturn({
      data: subCategories,
      skipDuplicates: true,
    });
  }

  async getCategories(
    { limit, offset, page, size }: Pagination,
    search: string,
  ) {
    const searchQuery: Prisma.CategoryWhereInput[] = [];

    if (search) {
      searchQuery.push({
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      });
    }

    const [count, categories] = await this.prismaService.$transaction([
      this.prismaService.category.count({
        where: { parentId: null, AND: searchQuery },
      }),
      this.prismaService.category.findMany({
        take: limit,
        skip: offset,
        where: {
          AND: searchQuery,
          parentId: null,
        },
        omit: {
          parentId: true,
        },
        include: {
          children: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
        orderBy: { createdAt: "asc" },
      }),
    ]);

    return {
      page,
      size,
      total: count,
      data: categories,
    };
  }

  async findBySlug(slug: string) {
    const category = await this.prismaService.category.findUnique({
      where: { slug },
      omit: {
        parentId: true,
      },
      include: {
        children: {
          omit: {
            parentId: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    const { children, ...rest } = category;

    return {
      ...rest,
      subCategories: children,
    };
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    return await this.prismaService.category.update({
      where: { id: category.id },
      data: {
        ...dto,
        slug: slugify(dto.name),
      },
      omit: {
        parentId: true,
      },
    });
  }

  async updateSubCategory(id: string, dto: UpdateSubCategoryDto) {
    const [category, subCategory] = await Promise.all([
      this.prismaService.category.findUnique({
        where: { id: dto.parentId },
        select: { id: true },
      }),
      this.prismaService.category.findUnique({
        where: { id },
        select: { id: true },
      }),
    ]);

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    if (!subCategory) {
      throw new NotFoundException("Sub category not found!");
    }

    return await this.prismaService.category.update({
      where: { id: subCategory.id },
      data: {
        ...dto,
        slug: slugify(dto.name),
      },
      select: {
        id: true,
        name: true,
        slug: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async deleteCategory(id: string) {
    const category = await this.prismaService.category.findFirst({
      where: { id },
      select: { id: true },
    });

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    await this.prismaService.category.delete({
      where: { id: category.id },
    });

    return {
      message: "Category has been successfully deleted.",
    };
  }

  async deleteCategories(dto: DeleteCategoriesDto) {
    const categories = await this.prismaService.category.deleteMany({
      where: {
        id: { in: dto.ids },
        parentId: null,
      },
    });

    if (categories.count === 0) {
      throw new NotFoundException("There is no matching slugs or tenant id!");
    }

    return {
      message: "Categories have been successfully deleted.",
    };
  }
}
