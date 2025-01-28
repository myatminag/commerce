import { Module, Scope } from "@nestjs/common";
import { Request } from "express";

import { PrismaService } from "./prisma.service";

@Module({
  providers: [
    PrismaService,
    {
      provide: "CONNECTION",
      useFactory: (prismaService: PrismaService, request: Request) => {
        const tenantId = (request.headers["tenant-id"] as string) || "public";
        return prismaService.getClient(tenantId);
      },
      inject: [PrismaService, "REQUEST"],
      scope: Scope.REQUEST,
      durable: true,
    },
  ],
  exports: ["CONNECTION"],
})
export class PrismaModule {}
