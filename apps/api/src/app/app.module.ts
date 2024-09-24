import { Module } from "@nestjs/common";

import { PrismaModule } from "src/services/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
