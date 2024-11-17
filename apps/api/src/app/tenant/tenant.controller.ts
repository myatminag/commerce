import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TenantService } from "./tenant.service";
import { CreateTenantDto } from "./dto/create-tenant.dto";
import { UpdateTenantDto } from "./dto/update-tenant.dto";
import { NoTenantGuard } from "src/decorators/no-tenant.decorator";

@ApiTags("tenants")
@Controller("tenants")
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Post()
  @NoTenantGuard()
  async create(@Body() createTanantDto: CreateTenantDto) {
    return await this.tenantService.create(createTanantDto);
  }

  @Get(":id")
  @NoTenantGuard()
  async findById(@Param("id") id: string) {
    return await this.tenantService.findById(id);
  }

  @Put(":id")
  @NoTenantGuard()
  async update(@Param("id") id: string, @Body() dto: UpdateTenantDto) {
    return await this.tenantService.update(id, dto);
  }

  @Delete(":id")
  @NoTenantGuard()
  async delete(@Param("id") id: string) {
    return await this.tenantService.delete(id);
  }
}
