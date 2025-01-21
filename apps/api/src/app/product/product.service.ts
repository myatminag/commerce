import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { ClsService } from "nestjs-cls";

import { PrismaService } from "src/services/prisma/prisma.service";
import { slugify } from "src/utils/slugify";
import { CreateProductDto, ProductVariantDto } from "./dto/create-product.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(
    private clsService: ClsService,
    private prismaService: PrismaService,
  ) {}

  async createProduct(dto: CreateProductDto) {
    const tenantId = this.clsService.get("tenant-id");

    const [isProductExit, isProductVariantExit] = await Promise.all([
      this.prismaService.extend.product.findUnique({
        where: {
          sku: dto.sku,
        },
      }),
      this.prismaService.extend.productVariant.findMany({
        where: {
          sku: {
            in: dto.product_variant.map((variant) => variant.sku),
          },
        },
      }),
    ]);

    if (isProductExit) {
      throw new ConflictException("A product sku already exists!");
    }

    if (isProductVariantExit) {
      throw new ConflictException("Variants sku already exists!");
    }

    return await this.prismaService.extend.product.create({
      data: {
        name: dto.name,
        slug: slugify(dto.name),
        description: dto.description,
        feature_image: dto.feature_image,
        cost: dto.cost,
        price: dto.price,
        price_max: dto.price_max,
        price_min: dto.price_min,
        sku: dto.sku,
        stock: dto.stock,
        brand: { connect: { id: dto.brand_id } },
        category: { connect: { id: dto.category_id } },
        options: JSON.stringify(dto.options || []),
        images: JSON.stringify(dto.images || []),
        ...this.discount(dto),
        profit: this.calculateProfit(dto.price, dto.cost),
        product_variant: this.variants(tenantId, dto.product_variant),
      } as Prisma.ProductCreateInput,
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
      this.prismaService.extend.product.count(),
      this.prismaService.extend.product.findMany({
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
    const tenantId = this.clsService.get("tenant-id");

    const product = await this.prismaService.extend.product.findUnique({
      where: {
        tenant_id_slug: {
          tenant_id: tenantId,
          slug,
        },
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
    const slug = slugify(dto.name);

    const [product, isSkuExist] = await Promise.all([
      this.prismaService.extend.product.findUnique({
        where: { id },
        select: { id: true },
      }),
      this.prismaService.extend.product.findUnique({
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

    return await this.prismaService.extend.product.update({
      where: { id: product.id },
      data: {
        ...dto,
        slug,
        options: JSON.stringify(dto.options || []),
        images: JSON.stringify(dto.images || []),
        profit: this.calculateProfit(dto.price, dto.cost),
        ...this.discount(dto),
        product_variant: this.variants("", dto.product_variant),
      } as Prisma.XOR<
        Prisma.ProductCreateInput,
        Prisma.ProductUncheckedCreateInput
      >,
      include: {
        product_variant: true,
      },
    });
  }

  async deleteProduct(id: string) {
    const product = await this.prismaService.extend.product.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException("Product is not found!");
    }

    await this.prismaService.extend.product.delete({
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

  private variants(tenantId: string, variants?: ProductVariantDto[]) {
    if (!variants?.length) return undefined;

    return {
      create: variants.map((variant) => ({
        ...variant,
        tenant: { connect: { id: tenantId } },
        options: JSON.stringify(variant.options || []),
        profit: this.calculateProfit(variant.price, variant.cost),
      })),
    };
  }

  private calculateProfit(price: number, cost: number) {
    return Number((price - cost).toFixed(2));
  }
}
