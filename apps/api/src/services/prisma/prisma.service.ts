import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { ClsService } from "nestjs-cls";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private clsService: ClsService) {
    super();
  }

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

  public get instance() {
    const tenantId = this.clsService.get("tenant-id");

    return this.$extends({
      query: {
        $allOperations({ args, operation, query }) {
          if (operation === "create") {
            args.data = {
              ...args.data,
              tenant_id: tenantId,
            } as any;

            return query(args);
          }

          if (operation === "findMany") {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as any;

            return query(args);
          }

          if (operation === "findUnique") {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as any;

            return query(args);
          }

          // args = args as Extract<typeof args, { where: unknown }>;

          return query(args);
        },
      },
    }) as PrismaService;
  }
}
