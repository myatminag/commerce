import { FactoryProvider, Module, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { PrismaClient } from "@prisma/client/extension";

import { CONNECTION } from "src/utils/constant";
import { PrismaService } from "./prisma.service";

interface ContextPayload {
  tenantId: string;
}

export const PrismaProvider: FactoryProvider<PrismaClient> = {
  provide: CONNECTION,
  useFactory: async (prismaService: PrismaService, payload: ContextPayload) => {
    const tenantId = payload.tenantId || "public";
    return await prismaService.connect(tenantId);
  },
  inject: [PrismaService, REQUEST],
  scope: Scope.REQUEST,
  durable: true,
};

@Module({
  providers: [PrismaService, PrismaProvider],
  exports: [PrismaService, CONNECTION],
})
export class PrismaModule {}
