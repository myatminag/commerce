import {
  HttpException,
  HttpStatus,
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

    if (!tenantId) {
      throw new HttpException("Missing tenant id!", HttpStatus.BAD_REQUEST);
    }

    if (!this.clients[tenantId]) {
      const databaseURL = process.env.DATABASE_URL!.replace("public", tenantId);

      this.clients[tenantId] = new PrismaClient({
        datasources: {
          db: {
            url: databaseURL,
          },
        },
      });

      return this.clients[tenantId];
    }

    return this.clients[tenantId];
  }

  async onModuleDestroy() {
    await Promise.all(
      Object.values(this.clients).map((client) => client.$disconnect()),
    );
  }

  private getTenantId(req: Request) {
    return req["tenant"];
  }
}
