import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async createProduct(dto: CreateProductDto) {
    console.log("dto", dto);
  }
}
