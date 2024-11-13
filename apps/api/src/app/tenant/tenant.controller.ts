import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateTenantDto } from "./dto/create-tenant.dto";
import { TenantService } from "./tenant.service";
import { NoTenantGuard } from "./decorator/no-tenant-guard";

@ApiTags("tenants")
@Controller("tenants")
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @NoTenantGuard()
  @Post("/register")
  async create(@Body() createTanantDto: CreateTenantDto) {
    return await this.tenantService.create(createTanantDto);
  }

  @Get(":id")
  async findById() {
    return await this.tenantService.findById();
  }
}
