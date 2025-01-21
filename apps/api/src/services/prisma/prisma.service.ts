import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ClsService } from "nestjs-cls";

type CreateInputWithTenant<T> = T & {
  tenant?: { connect: { id: string } };
};

type WhereInputWithTenant<T> = T & {
  tenant_id: string;
};

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

  public get extend(): PrismaService {
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
              tenant: { connect: { id: tenantId } },
            } as CreateInputWithTenant<typeof args.data>;

            return query(args);
          },
          createMany: function ({ args, query }) {
            if (Array.isArray(args.data)) {
              args.data = args.data.map(
                (d) =>
                  ({
                    ...d,
                    tenant: { connect: { id: tenantId } },
                  }) as CreateInputWithTenant<typeof d>,
              );
            } else {
              args.data = {
                ...args.data,
                tenant_id: tenantId,
              } as CreateInputWithTenant<typeof args.data>;
            }

            return query(args);
          },
          findMany: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as WhereInputWithTenant<typeof args.where>;

            return query(args);
          },
          findUnique: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as WhereInputWithTenant<typeof args.where>;

            return query(args);
          },
          findFirst: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as WhereInputWithTenant<typeof args.where>;

            return query(args);
          },
          deleteMany: function ({ args, query }) {
            args.where = {
              ...args.where,
              tenant_id: tenantId,
            } as WhereInputWithTenant<typeof args.where>;

            return query(args);
          },
        },
      },
    }) as PrismaService;
  }
}
