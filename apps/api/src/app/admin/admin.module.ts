import { Module } from "@nestjs/common";

import { BcryptService } from "src/services/auth/hashing/bcrypt.service";
import { HashingService } from "src/services/auth/hashing/hashing.service";
import { PrismaModule } from "src/services/prisma/prisma.module";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";

@Module({
  imports: [PrismaModule],
  providers: [
    AdminService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
