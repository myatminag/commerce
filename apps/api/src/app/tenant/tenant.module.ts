import { Module } from "@nestjs/common";

import { PrismaModule } from "src/services/prisma/prisma.module";
import { TenantController } from "./tenant.controller";
import { TenantService } from "./tenant.service";

@Module({
  providers: [TenantService],
  controllers: [TenantController],
  imports: [PrismaModule],
})
export class TenantModule {}
