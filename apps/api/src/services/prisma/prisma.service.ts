import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService implements OnModuleDestroy {
  private clients: Map<string, PrismaClient> = new Map();

  getClient(tenantId: string): PrismaClient {
    if (!this.clients.has(tenantId)) {
      const prismaClient = new PrismaClient({
        datasources: {
          db: {
            url: `${process.env.DATABASE_URL}?schema=${tenantId}`,
          },
        },
      });
      this.clients.set(tenantId, prismaClient);
    }
    return this.clients.get(tenantId);
  }

  async onModuleDestroy() {
    for (const client of this.clients.values()) {
      await client.$disconnect();
    }
  }
}
