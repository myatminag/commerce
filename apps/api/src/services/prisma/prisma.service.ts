import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private clients: { [key: string]: PrismaClient } = {};

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      Logger.error("Prisma Error: ", error);
    }
  }

  async getClient(req: Request) {
    const tenantId = this.getTenantId(req);
    let client = this.clients[tenantId];

    if (!client) {
      const databaseURL = process.env.DATABASE_URL!.replace("public", tenantId);

      client = new PrismaClient({
        datasources: {
          db: {
            url: databaseURL,
          },
        },
      });

      this.clients[tenantId] = client;
    }

    return client;
  }

  async onModuleDestroy() {
    await Promise.all(
      Object.values(this.clients).map((client) => client.$disconnect()),
    );
  }

  getTenantId(req: Request) {
    return String(req.query.tenantId);
  }
}
