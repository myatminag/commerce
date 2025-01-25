import { Inject, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(@Inject(REQUEST) private request: Request) {
    const tenantId = request?.headers?.["tenant-id"] || "public";

    super({
      datasources: {
        db: {
          url: `${process.env.DATABASE_URL}?schema=${tenantId}`,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
