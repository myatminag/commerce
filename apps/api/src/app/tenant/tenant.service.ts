import { Injectable } from "@nestjs/common";
import { ClsService } from "nestjs-cls";

import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateTenantDto } from "./dto/create-tenant.dto";

@Injectable()
export class TenantService {
  constructor(
    private clsService: ClsService,
    private prismaService: PrismaService,
  ) {}

  async create(dto: CreateTenantDto) {
    const tenant = await this.prismaService.tenant.create({
      data: {
        ...dto,
        is_active: dto.is_active ?? false,
      },
    });

    return tenant;
  }

  async findById() {
    const tenantId = this.clsService.get("tenant-id");

    return this.prismaService.tenant.findUnique({ where: { id: tenantId } });
  }
}
