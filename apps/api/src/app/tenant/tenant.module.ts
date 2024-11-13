import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";

import { TenantController } from "./tenant.controller";
import { TenantService } from "./tenant.service";
import { TenantGuard } from "./guards/tenant.guard";
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
