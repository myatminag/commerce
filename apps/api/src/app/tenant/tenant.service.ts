import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { CreateTenantDto } from "./dto/create-tenant.dto";
import { UpdateTenantDto } from "./dto/update-tenant.dto";
import { PrismaService } from "src/services/prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class TenantService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateTenantDto) {
    const existingTenant = await this.prismaService.tenant.findUnique({
      where: { phone: dto.phone },
    });

    if (existingTenant) {
      throw new ConflictException("Tenant already exists!");
    }

    const tenant = await this.prismaService.$transaction(async (prisma) => {
      const createdTenant = await prisma.tenant.create({
        data: {
          ...dto,
        },
      });

      await prisma.$executeRaw`CREATE SCHEMA IF NOT EXISTS "${Prisma.raw(dto.domain)}"`;

      return createdTenant;
    });

    return tenant;
  }

  async update(id: string, dto: UpdateTenantDto) {
    await this.findById(id);

    const tenant = await this.prismaService.tenant.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return tenant;
  }

  async delete(id: string) {
    await this.findById(id);

    return await this.prismaService.tenant.delete({ where: { id } });
  }

  async findById(id: string) {
    const tenant = await this.prismaService.tenant.findUnique({
      where: { id },
    });

    if (!tenant) {
      throw new NotFoundException("Tenant not found!");
    }

    return tenant;
  }
}
