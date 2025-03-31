import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

import { Pagination } from "src/decorators/pagination.decorator";
import { PrismaError } from "src/lib/constants";
import { slugify } from "src/lib/utils";
import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { StatusDto } from "./dto/status.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { DeleteBrandsDto } from "./dto/delete-brands.dto";

@Injectable()
export class BrandService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateBrandDto) {
    const slug = slugify(dto.name);

    const isBrandExist = await this.prismaService.brand.findUnique({
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

  async getBrands({ limit, offset, page, size }: Pagination, search: string) {
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
      data: brands,
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

  async update(id: string, dto: UpdateBrandDto) {
    try {
      await this.prismaService.brand.update({
        where: { id },
        data: {
          slug: slugify(dto.name),
          ...dto,
        },
      });

      return {
        message: "Brand has been successfully updated.",
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === PrismaError.RECORD_TO_UPDATE_NOT_FOUND) {
          throw new BadRequestException(error.meta?.cause);
        }
      }
      throw error;
    }
  }

  async status(id: string, dto: StatusDto) {
    const brand = await this.prismaService.brand.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!brand) {
      throw new NotFoundException("Brand not found!");
    }

    await this.prismaService.$transaction([
      this.prismaService.brand.update({
        where: { id: brand.id },
        data: {
          status: dto.status,
        },
      }),
      this.prismaService.product.updateMany({
        where: { brandId: brand.id },
        data: {
          isAvailable: false,
        },
      }),
    ]);

    return {
      message: "Brand status has been successfully updated.",
    };
  }

  async delete(id: string) {
    const brand = await this.prismaService.brand.findUnique({
      where: { id },
    });

    if (!brand) {
      throw new NotFoundException("Brand not found!");
    }

    await this.prismaService.brand.delete({
      where: { id: brand.id },
    });

    return {
      message: "Brand has been successfully deleted.",
    };
  }

  async deleteBrands(dto: DeleteBrandsDto) {
    const brands = await this.prismaService.brand.deleteMany({
      where: {
        id: { in: dto.ids },
      },
    });

    if (brands.count === 0) {
      throw new NotFoundException("There is no matching brand id!");
    }

    return {
      message: "Brands have been successfully deleted.",
    };
  }
}
