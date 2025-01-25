import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { CreateTenantDto } from "./dto/create-tenant.dto";
import { UpdateTenantDto } from "./dto/update-tenant.dto";
import { PrismaService } from "src/services/prisma/prisma.service";

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

    return await this.prismaService.$transaction(async (prisma) => {
      await prisma.$executeRawUnsafe(
        `CREATE SCHEMA IF NOT EXISTS "${dto.domain}"`,
      );

      const tables = await prisma.$queryRaw<{ table_name: string }[]>`
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
      `;

      for (const table of tables) {
        await prisma.$executeRawUnsafe(
          `CREATE TABLE "${dto.domain}"."${table.table_name}" AS TABLE "public"."${table.table_name}" WITH NO DATA`,
        );
      }

      return await prisma.tenant.create({
        data: {
          ...dto,
        },
      });
    });
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

  async findById(domain: string) {
    const tenant = await this.prismaService.tenant.findUnique({
      where: { domain },
    });

    if (!tenant) {
      throw new NotFoundException("Tenant not found!");
    }

    return tenant;
  }
}
