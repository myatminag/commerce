import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

import { CONNECTION } from "src/utils/constant";
import { CreateTenantDto } from "./dto/create-tenant.dto";
import { UpdateTenantDto } from "./dto/update-tenant.dto";

@Injectable()
export class TenantService {
  constructor(@Inject(CONNECTION) private prismaClient: PrismaClient) {}

  async create(dto: CreateTenantDto) {
    const existingTenant = await this.prismaClient.tenant.findUnique({
      where: { domain: dto.domain },
    });

    if (existingTenant) {
      throw new ConflictException("Tenant already exists!");
    }

    return await this.prismaClient.$transaction(async (tnx) => {
      await tnx.$executeRaw`CREATE SCHEMA IF NOT EXISTS "${Prisma.raw(dto.domain)}";`;

      // const tables = await tnx.$queryRaw<{ table_name: string }[]>`
      //   SELECT table_name
      //   FROM information_schema.tables
      //   WHERE table_schema = 'public'
      // `;

      // for (const table of tables) {
      //   if (table.table_name === "_prisma_migrations") {
      //     await tnx.$executeRaw`
      //       CREATE TABLE "${Prisma.raw(dto.domain)}"."${Prisma.raw(table.table_name)}"
      //       AS TABLE "public"."${Prisma.raw(table.table_name)}" WITH DATA;
      //     `;
      //   } else {
      //     await tnx.$executeRaw`
      //       CREATE TABLE "${Prisma.raw(dto.domain)}"."${Prisma.raw(table.table_name)}"
      //       AS TABLE "public"."${Prisma.raw(table.table_name)}" WITH NO DATA;
      //     `;
      //   }
      // }

      return await tnx.tenant.create({
        data: {
          domain: dto.domain,
          name: dto.name,
          phone: dto.phone,
          email: dto.email,
          is_active: dto.is_active,
          metadata: dto.metadata,
        },
      });
    });
  }

  async update(id: string, dto: UpdateTenantDto) {
    await this.findById(id);

    const tenant = await this.prismaClient.tenant.update({
      where: {
        id,
      },
      data: {
        name: dto.name,
        phone: dto.phone,
        email: dto.email,
        is_active: dto.is_active,
        metadata: dto.metadata,
      },
    });

    return tenant;
  }

  async delete(id: string) {
    await this.findById(id);

    return await this.prismaClient.tenant.delete({ where: { id } });
  }

  async findById(domain: string) {
    const tenant = await this.prismaClient.tenant.findUnique({
      where: { domain },
    });

    if (!tenant) {
      throw new NotFoundException("Tenant not found!");
    }

    return tenant;
  }
}
