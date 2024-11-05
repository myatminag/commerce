import { Module } from "@nestjs/common";

import { TenantService } from "./tenant.service";
import { TenantController } from "./tenant.controller";
import { PrismaModule } from "src/services/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [TenantService],
  controllers: [TenantController],
})
export class TenantModule {}
