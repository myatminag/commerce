import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "src/services/prisma/prisma.service";
import { slugify } from "src/utils/slugify";
import { CreateProductDto, ProductVariantDto } from "./dto/create-product.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async createProduct(dto: CreateProductDto) {
    const slug = slugify(dto.name);

    const [isProductExist, isSkuExist] = await Promise.all([
      this.prismaService.instance.product.findFirst({
        where: { slug },
      }),
      this.prismaService.instance.product.findUnique({
        where: { sku: dto.sku },
      }),
    ]);

    if (isProductExist) {
      throw new NotFoundException("Product already exists!");
    }

    if (isSkuExist) {
      throw new NotFoundException("SKU already exists!");
    }

    return await this.prismaService.instance.product.create({
      data: {
        ...dto,
        slug,
        options: JSON.stringify(dto.options || []),
        images: JSON.stringify(dto.images || []),
        profit: this.calculateProfit(dto.price, dto.cost),
        ...this.discount(dto),
        product_variant: this.variants(dto.product_variant),
      } as Prisma.XOR<
        Prisma.ProductCreateInput,
        Prisma.ProductUncheckedCreateInput
      >,
      include: {
        product_variant: true,
      },
    });
  }

  async productLists({ limit, offset, search }: QueryParamsDto) {
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
      this.prismaService.product.count(),
      this.prismaService.product.findMany({
        take: limit,
        skip: (offset - 1) * limit,
        where: {
          AND: searchQuery,
        },
      }),
    ]);

    return {
      count,
      products,
    };
  }

  async productDetails(slug: string) {
    const product = await this.prismaService.instance.product.findFirst({
      where: {
        slug,
      },
      omit: {
        cart_id: true,
        tenant_id: true,
      },
      include: {
        product_variant: {
          omit: {
            created_at: true,
            updated_at: true,
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

    return {
      product,
    };
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    const [product, isSkuExist] = await Promise.all([
      this.prismaService.instance.product.findUnique({
        where: {
          id,
        },
        select: { id: true, sku: true },
      }),
      this.prismaService.instance.product.findUnique({
        where: { sku: dto.sku },
        select: { sku: true },
      }),
    ]);

    if (!product) {
      throw new NotFoundException("Product not found!");
    }

    if (isSkuExist) {
      throw new ConflictException("Sku already exits!");
    }

    return await this.prismaService.instance.product.update({
      where: { id: product.id },
      data: {
        ...dto,
        slug: slugify(dto.name),
        options: JSON.stringify(dto.options || []),
        images: JSON.stringify(dto.images || []),
        profit: this.calculateProfit(dto.price, dto.cost),
        ...this.discount(dto),
        product_variant: this.variants(dto.product_variant),
      },
      include: {
        product_variant: true,
      },
    });
  }

  async deleteProduct(id: string) {
    const product = await this.prismaService.instance.product.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException("Product is not found!");
    }

    await this.prismaService.instance.product.delete({
      where: { id: product.id },
    });

    return {
      message: "Product has been successfully deleted!",
    };
  }

  private discount(dto: CreateProductDto | UpdateProductDto) {
    if (!dto.discount_type) return {};

    return {
      discount_type: dto.discount_type,
      discount_amount: dto.discount_amount,
      discount_start_date: dto.discount_start_date,
      discount_end_date: dto.discount_end_date,
    };
  }

  private variants(variants?: ProductVariantDto[]) {
    if (!variants?.length) return undefined;

    return {
      create: variants.map((variant) => ({
        ...variant,
        options: JSON.stringify(variant.options || []),
        profit: this.calculateProfit(variant.price, variant.cost),
      })),
    };
  }

  private calculateProfit(price: number, cost: number) {
    return Number((price - cost).toFixed(2));
  }
}
