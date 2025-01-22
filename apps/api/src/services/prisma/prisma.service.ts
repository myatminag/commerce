import { Injectable, Scope, Inject } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export interface ContextPayload extends Request {
  tenantId: string;
}

@Injectable({ scope: Scope.REQUEST, durable: true })
export class PrismaService extends PrismaClient {
  constructor(@Inject(REQUEST) private request: ContextPayload) {
    super({
      datasources: {
        db: {
          url: `${process.env.DATABASE_URL}${"public"}`,
        },
      },
    });
  }

  async connect() {
    await this.$connect();
  }
}
