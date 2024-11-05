import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { CreateTenantDto } from "./dto/create-tenant.dto";
import { TenantService } from "./tenant.service";

@ApiTags("tenant")
@Controller("tenants")
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Post("/register")
  async create(@Body() createTanantDto: CreateTenantDto) {
    return await this.tenantService.create(createTanantDto);
  }
}
