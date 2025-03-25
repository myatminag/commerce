import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/services/prisma/prisma.service";
import { GenerateIdService } from "./generate-id/generate-id.service";

@Injectable()
export class OrderService {
  constructor(
    private prismaService: PrismaService,
    private generateIdService: GenerateIdService,
  ) {}

  create() {
    const orderId = this.generateIdService.generateId();
    console.log("orderId", orderId);
  }
}
