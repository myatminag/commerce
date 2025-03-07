import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { PrismaService } from "src/services/prisma/prisma.service";

import { CreateAdminDto } from "./dto/create-admin.dto";

@Injectable()
export class AdminService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateAdminDto) {
    const existingUser = await this.prismaService.admin.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException("Admin already exits!");
    }

    return await this.prismaService.admin.create({
      data: { ...dto },
    });
  }

  async findById(id: string) {
    const admin = await this.prismaService.admin.findUnique({
      where: { id },
      omit: { password: true },
    });

    if (!admin) {
      throw new NotFoundException("User not found!");
    }

    return admin;
  }

  async findByEmail(email: string) {
    const admin = await this.prismaService.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      throw new NotFoundException("Admin not found!");
    }

    return admin;
  }
}
