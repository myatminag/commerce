import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { Pagination } from "src/decorators/pagination.decorator";
import { slugify } from "src/lib/utils";
import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { DiscountProductDto } from "./dto/discount-product.dto";
import { DeleteProductsDto } from "./dto/delete-products.dto";
import { Discount } from "src/lib/constants";

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateProductDto) {
    const [product, variant] = await Promise.all([
      this.prismaService.product.findUnique({
        where: {
          sku: dto.sku,
        },
      }),
      this.prismaService.productVariant.findMany({
        where: {
          sku: {
            in: dto.productVariant.map((variant) => variant.sku),
          },
        },
      }),
    ]);

    if (product) {
      throw new ConflictException("Product already exists!");
    }

    if (variant.length) {
      throw new ConflictException("Variant already exists!");
    }

    return await this.prismaService.product.create({
      data: {
        name: dto.name,
        slug: slugify(dto.name),
        description: dto.description,
        featureImage: dto.featureImage,
        cost: dto.cost,
        price: dto.price,
        priceMax: dto.priceMax,
        priceMin: dto.priceMin,
        sku: dto.sku,
        stock: dto.stock,
        brand: { connect: { id: dto.brandId } },
        category: { connect: { id: dto.categoryId } },
        options: JSON.stringify(dto.options || []),
        images: JSON.stringify(dto.images || []),
        discountType: dto.discountType,
        discountAmount: dto.discountAmount,
        discountStartDate: dto.discountStartDate,
        discountEndDate: dto.discountEndDate,
        profit: this.calculateProfit(dto.price, dto.cost),
        productVariant: {
          create: dto.productVariant.map((variant) => ({
            ...variant,
            options: JSON.stringify(variant.options || []),
            profit: this.calculateProfit(variant.price, variant.cost),
          })),
        },
      },
      include: {
        productVariant: true,
      },
    });
  }

  async getProducts(
    { limit, offset, page, size }: Pagination,
    search?: string,
  ) {
    const searchQuery: Prisma.ProductWhereInput[] = [];

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

    const [count, products] = await this.prismaService.$transaction([
      this.prismaService.product.count({
        where: {
          AND: searchQuery,
        },
      }),
      this.prismaService.product.findMany({
        take: limit,
        skip: offset,
        where: {
          AND: searchQuery,
        },
      }),
    ]);

    return {
      page,
      size,
      total: count,
      data: products,
    };
  }

  async findBySlug(slug: string) {
    const product = await this.prismaService.product.findUnique({
      where: {
        slug: slug,
      },
      omit: {
        cartId: true,
      },
      include: {
        productVariant: {
          omit: {
            createdAt: true,
            updatedAt: true,
          },
        },
        brand: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException("Product not found!");
    }

    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
      include: {
        productVariant: true,
      },
    });

    if (!product) {
      throw new NotFoundException("Product not found!");
    }

    return await this.prismaService.product.update({
      where: { id: product.id },
      data: {
        name: dto.name,
        slug: slugify(dto.name),
        description: dto.description,
        featureImage: dto.featureImage,
        cost: dto.cost,
        price: dto.price,
        priceMax: dto.priceMax,
        priceMin: dto.priceMin,
        sku: dto.sku,
        stock: dto.stock,
        brand: { connect: { id: dto.brandId } },
        category: { connect: { id: dto.categoryId } },
        options: JSON.stringify(dto.options),
        images: JSON.stringify(dto.images),
        discountType: dto.discountType,
        discountAmount: dto.discountAmount,
        discountStartDate: dto.discountStartDate,
        discountEndDate: dto.discountEndDate,
        profit: this.calculateProfit(dto.price, dto.cost),
        productVariant: {
          upsert: dto.productVariant.map((variant) => ({
            where: { sku: variant.sku },
            create: {
              ...variant,
              options: JSON.stringify(variant.options),
              profit: this.calculateProfit(variant.price, variant.cost),
            },
            update: {
              ...variant,
              options: JSON.stringify(variant.options),
              profit: this.calculateProfit(variant.price, variant.cost),
            },
          })),
        },
      },
      include: {
        productVariant: true,
      },
    });
  }

  async discount(dto: DiscountProductDto) {
    return this.prismaService.$transaction(async (prisma) => {
      const updateProducts = await prisma.product.updateMany({
        where: { id: { in: dto.ids } },
        data: {
          discountType: dto.discountType,
          discountAmount: dto.discountAmount,
          discountStartDate: dto.discountStartDate,
          discountEndDate: dto.discountEndDate,
        },
      });

      if (updateProducts.count === 0) {
        throw new NotFoundException("There is no matching id!");
      }

      const products = await prisma.product.findMany({
        where: { id: { in: dto.ids } },
        select: { id: true, price: true },
      });

      await Promise.all(
        products.map((product) => {
          return prisma.product.update({
            where: { id: product.id },
            data: {
              price: this.discountPrice(dto, product.price),
            },
          });
        }),
      );

      return {
        message: "Products have been successfully updated.",
      };
    });
  }

  async delete(id: string) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException("Product is not found!");
    }

    await this.prismaService.product.delete({
      where: { id: product.id },
    });

    return {
      message: "Product has been successfully deleted!",
    };
  }

  async deleteMany(dto: DeleteProductsDto) {
    const products = await this.prismaService.product.deleteMany({
      where: {
        id: { in: dto.ids },
      },
    });

    if (products.count === 0) {
      throw new NotFoundException("There is no matching id!");
    }

    return {
      message: "Products have been successfully deleted.",
    };
  }

  private calculateProfit(price: number, cost: number) {
    return Number((price - cost).toFixed(2));
  }

  private discountPrice(dto: DiscountProductDto, price: number) {
    if (dto.discountType === Discount.PERCENTAGE) {
      return price - (price * dto.discountAmount) / 100;
    } else {
      return price - dto.discountAmount;
    }
  }
}
