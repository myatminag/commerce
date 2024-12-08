import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ClsService } from "nestjs-cls";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private clsService: ClsService) {
    super({
      log: ["query"],
    });
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

  public get instance(): PrismaService {
    const tenantId = this.clsService.get("tenant-id");

    if (!tenantId) {
      throw new BadRequestException("Tenant id is missing!");
    }

    return this.$extends({
      query: {
        $allModels: {
          create: function ({ args, query }) {
            args.data = {
              ...args.data,
              tenant_id: tenantId,
            } as any;

            return query(args);
          },
          createMany: function ({ args, query }) {
            if (Array.isArray(args.data)) {
              args.data = args.data.map(
                (d) =>
                  ({
                    ...d,
                    tenant_id: tenantId,
                  }) as any,
              );
            } else {
              args.data = {
                ...args.data,
                tenant_id: tenantId,
              } as any;
            }

            return query(args);
          },
          findMany: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as unknown;

            return query(args);
          },
          findUnique: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as any;

            return query(args);
          },
          findFirst: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as unknown;

            return query(args);
          },
          deleteMany: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as unknown;

            return query(args);
          },
        },
      },
    }) as PrismaService;
  }
}
