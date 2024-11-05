import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateTenantDto } from "./dto/create-tenant.dto";

@Injectable()
export class TenantService {
  constructor(private prismaService: PrismaService) {}

  async create(createTenantDto: CreateTenantDto) {
    // replace dots to avoid issues with schema naming
    const schemaName = createTenantDto.domain.replace(/\./g, "_");

    await this.prismaService.$executeRawUnsafe(`CREATE SCHEMA ${schemaName}`);

    const tenant = await this.prismaService.tenant.create({
      data: {
        name: createTenantDto.name,
        domain: createTenantDto.domain,
        phone: createTenantDto.phone,
        email: createTenantDto.email,
        metadata: createTenantDto.metadata,
        is_active: createTenantDto.is_active ?? true,
      },
    });

    return tenant;
  }
}
