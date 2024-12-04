import { Module } from "@nestjs/common";

import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { PrismaModule } from "src/services/prisma/prisma.module";

@Module({
  providers: [AdminService],
  controllers: [AdminController],
  imports: [PrismaModule],
  exports: [AdminService],
})
export class AdminModule {}
