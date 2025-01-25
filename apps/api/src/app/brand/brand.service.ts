import {
  ConflictException,
  Injectable,
  NotFoundException,
  Scope,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "src/services/prisma/prisma.service";
import { slugify } from "src/utils/slugify";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { QueryParamsDto } from "./dto/query-params.dto";

@Injectable({ scope: Scope.REQUEST, durable: true })
export class BrandService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateBrandDto) {
    const slug = slugify(dto.name);

    const isBrandExist = await this.prismaService.brand.findFirst({
      where: {
        slug,
      },
    });

    if (isBrandExist) {
      throw new ConflictException("This brand already exists!");
    }

    return await this.prismaService.brand.create({
      data: {
        ...dto,
        slug,
      } as Prisma.BrandCreateInput,
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

    const [count, brands] = await this.prismaService.$transaction([
      this.prismaService.brand.count(),
      this.prismaService.brand.findMany({
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
    const brand = await this.prismaService.brand.findFirst({
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

    await this.prismaService.brand.delete({
      where: { id: isBrandExist.id },
    });

    return {
      message: "Brand has been successfully deleted.",
    };
  }
}
