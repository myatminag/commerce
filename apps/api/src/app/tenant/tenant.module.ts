import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";

import { TenantService } from "./tenant.service";
import { TenantGuard } from "src/guards/tenant.guard";
import { TenantController } from "./tenant.controller";
import { PrismaModule } from "src/services/prisma/prisma.module";

@Module({
  providers: [
    TenantService,
    {
      provide: APP_GUARD,
      useClass: TenantGuard,
    },
  ],
  controllers: [TenantController],
  imports: [PrismaModule],
})
export class TenantModule {}
