import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      Logger.error("Prisma Error: ", error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
