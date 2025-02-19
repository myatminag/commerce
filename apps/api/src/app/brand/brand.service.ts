import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "src/services/prisma/prisma.service";
import { slugify } from "src/utils/slugify";
import { CreateBrandDto, QueryParamsDto, UpdateBrandDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { PrismaError } from "src/utils/constants";

@Injectable()
export class BrandService {
  constructor(private readonly prismaService: PrismaService) {}

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
        slug,
        ...dto,
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

    const [count, brands] = await this.prismaService.$transaction([
      this.prismaService.brand.count({
        where: {
          AND: searchQuery,
        },
      }),
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

  async updateBySlug(slug: string, dto: UpdateBrandDto) {
    try {
      await this.prismaService.brand.update({
        where: { slug },
        data: dto,
      });
      return { status: "ok" };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === PrismaError.RECORD_TO_UPDATE_NOT_FOUND) {
          throw new BadRequestException(error.meta?.cause);
        }
      }
      throw error;
    }
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
