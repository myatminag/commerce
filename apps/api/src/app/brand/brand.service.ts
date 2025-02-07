import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
} from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

import { CONNECTION } from "src/utils/constant";
import { slugify } from "src/utils/slugify";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { QueryParamsDto } from "./dto/query-params.dto";

@Injectable({ scope: Scope.REQUEST, durable: true })
export class BrandService {
  constructor(@Inject(CONNECTION) private prismaClient: PrismaClient) {}

  async create(dto: CreateBrandDto) {
    const slug = slugify(dto.name);

    const isBrandExist = await this.prismaClient.brand.findFirst({
      where: {
        slug,
      },
    });

    if (isBrandExist) {
      throw new ConflictException("This brand already exists!");
    }

    return await this.prismaClient.brand.create({
      data: {
        banner_image: dto.banner_image,
        description: dto.description,
        name: dto.name,
        slug,
        thumbnail_image: dto.thumbnail_image,
      },
    });
  }

  async getAll({ limit, offset, search }: QueryParamsDto) {
    const searchQuery: Prisma.BrandWhereInput[] = [];

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

    const [count, brands] = await this.prismaClient.$transaction([
      this.prismaClient.brand.count(),
      this.prismaClient.brand.findMany({
        take: limit,
        skip: (offset - 1) * limit,
        where: {
          AND: searchQuery,
        },
      }),
    ]);

    return {
      total: count,
      brands,
    };
  }

  async findBySlug(slug: string) {
    const brand = await this.prismaClient.brand.findFirst({
      where: { slug },
      include: {
        product: true,
      },
    });

    if (!brand) {
      throw new NotFoundException("Brand not found!");
    }

    return brand;
  }

  async delete(slug: string) {
    const isBrandExist = await this.findBySlug(slug);

    await this.prismaClient.brand.delete({
      where: { id: isBrandExist.id },
    });

    return {
      message: "Brand has been successfully deleted.",
    };
  }
}
