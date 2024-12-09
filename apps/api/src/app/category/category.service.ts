import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "src/services/prisma/prisma.service";
import { slugify } from "src/utils/slugify";
import { CreateMainCategoryDto } from "./dto/create-category.dto";
import { CreateSubCategoryDto } from "./dto/create-subcategory.dto";
import { DeleteCategoriesDto } from "./dto/delete-categories.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdateMainCategoryDto } from "./dto/update-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-subcategory.dto";

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async createMainCategory(dto: CreateMainCategoryDto) {
    const slug = slugify(dto.name);

    const category = await this.prismaService.instance.category.findFirst({
      where: {
        slug,
      },
    });

    if (category) {
      throw new ConflictException("This category already exists!");
    }

    return await this.prismaService.instance.category.create({
      data: {
        ...dto,
        slug,
      },
      omit: {
        parent_id: true,
      },
    });
  }

  async createSubCategory(dto: CreateSubCategoryDto) {
    const slugs = dto.names.map(slugify);

    const [mainCategory, existingSlugs] = await Promise.all([
      this.prismaService.instance.category.findUnique({
        where: { id: dto.parent_id },
        select: { id: true },
      }),
      this.prismaService.instance.category.findMany({
        where: { slug: { in: slugs } },
        select: { name: true },
      }),
    ]);

    if (!mainCategory) {
      throw new NotFoundException("Main category not found!");
    }

    if (existingSlugs.length > 0) {
      const existingNames = existingSlugs.map((e) => e.name).join(", ");

      throw new ConflictException(
        `Subcategories already exist: ${existingNames}!`,
      );
    }

    const subCategories = dto.names.map((name) => ({
      name,
      slug: slugify(name),
      parent_id: dto.parent_id,
      tenant_id: "",
    }));

    return await this.prismaService.instance.category.createMany({
      data: subCategories,
      skipDuplicates: true,
    });
  }

  async getAllCategories({ limit, offset, search }: QueryParamsDto) {
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
      this.prismaService.instance.category.count({
        where: { parent_id: null },
      }),
      this.prismaService.instance.category.findMany({
        take: limit,
        skip: (offset - 1) * limit,
        where: {
          AND: searchQuery,
          parent_id: null,
        },
        omit: {
          parent_id: true,
          tenant_id: true,
        },
        include: {
          children: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
          _count: {
            select: {
              product: true,
              children: true,
            },
          },
        },
      }),
    ]);

    const categoryLists = categories.map(
      ({ _count, children, ...category }) => ({
        ...category,
        sub_categories: children,
        total_products: _count.product,
        total_sub_categories: _count.children,
      }),
    );

    return {
      total: count,
      categories: categoryLists,
    };
  }

  async getDetailsBySlug(slug: string) {
    const category = await this.prismaService.instance.category.findFirst({
      where: { slug },
      omit: {
        parent_id: true,
        tenant_id: true,
      },
      include: {
        product: true,
        children: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        _count: {
          select: {
            product: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    const { _count, children, ...rest } = category;

    return {
      ...rest,
      sub_categories: children,
      total_products: _count.product,
    };
  }

  async updateMainCategory(slug: string, dto: UpdateMainCategoryDto) {
    const category = await this.prismaService.instance.category.findFirst({
      where: { slug },
      select: { id: true },
    });

    if (!category) {
      throw new NotFoundException("Category not found!");
    }

    return await this.prismaService.instance.category.update({
      where: { id: category.id },
      data: {
        ...dto,
        slug: slugify(dto.name),
      },
      omit: {
        parent_id: true,
      },
    });
  }

  async updateSubCategory(slug: string, dto: UpdateSubCategoryDto) {
    const subCategory = await this.prismaService.instance.category.findFirst({
      where: { slug },
      select: { id: true },
    });

    if (!subCategory) {
      throw new NotFoundException("Subcategory not found!");
    }

    const mainCategory = await this.prismaService.instance.category.findUnique({
      where: { id: dto.parent_id },
      select: { id: true },
    });

    if (!mainCategory) {
      throw new NotFoundException("Main category not found!");
    }

    return await this.prismaService.instance.category.update({
      where: { id: subCategory.id },
      data: {
        ...dto,
        slug: slugify(dto.name),
      },
      select: {
        id: true,
        name: true,
        slug: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async deleteCategory(slug: string) {
    const category = await this.prismaService.instance.category.findFirst({
      where: { slug },
      select: { id: true },
    });

    if (!category) {
      throw new NotFoundException("Category is not found!");
    }

    await this.prismaService.instance.category.delete({
      where: { id: category.id },
    });

    return {
      message: "Category has been successfully deleted.",
    };
  }

  async deleteMainCategories(dto: DeleteCategoriesDto) {
    const categories = await this.prismaService.instance.category.deleteMany({
      where: {
        slug: { in: dto.slugs },
        parent_id: null,
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
