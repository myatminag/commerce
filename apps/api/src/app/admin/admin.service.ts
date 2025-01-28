import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaClient } from "@prisma/client/extension";
import { CreateAdminDto } from "./dto/create-admin.dto";

@Injectable()
export class AdminService {
  constructor(@Inject("CONNECTION") private prismaClient: PrismaClient) {}

  async create(dto: CreateAdminDto) {
    const existingUser = await this.prismaClient.admin.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException("Admin already exits!");
    }

    return await this.prismaClient.admin.create({
      data: { ...dto } as Prisma.AdminCreateInput,
      omit: { password: true },
    });
  }

  async findById(id: string) {
    const admin = await this.prismaClient.admin.findUnique({
      where: { id },
      omit: { password: true },
    });

    if (!admin) {
      throw new NotFoundException("User not found!");
    }

    return admin;
  }

  async findByEmail(email: string) {
    const admin = await this.prismaClient.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      throw new NotFoundException("Admin not found!");
    }

    return admin;
  }
}
