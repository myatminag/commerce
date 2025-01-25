import { Module } from "@nestjs/common";

import { PrismaModule } from "src/services/prisma/prisma.module";
import { BrandController } from "./brand.controller";
import { BrandService } from "./brand.service";
import { TenantModule } from "../tenant/tenant.module";

@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [PrismaModule, TenantModule],
})
export class BrandModule {}
