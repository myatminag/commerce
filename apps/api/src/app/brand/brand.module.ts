import { Module } from "@nestjs/common";

import { PrismaModule } from "src/services/prisma/prisma.module";
import { BrandController } from "./brand.controller";
import { BrandService } from "./brand.service";

@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [PrismaModule],
})
export class BrandModule {}
