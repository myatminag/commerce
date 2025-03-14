import { Module } from "@nestjs/common";

import { BcryptService } from "src/services/auth/hashing/bcrypt.service";
import { HashingService } from "src/services/auth/hashing/hashing.service";
import { PrismaModule } from "src/services/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
