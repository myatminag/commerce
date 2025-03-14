import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { Pagination } from "src/decorators/pagination.decorator";
import { HashingService } from "src/services/auth/hashing/hashing.service";
import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";

@Injectable()
export class AdminService {
  constructor(
    private prismaService: PrismaService,
    private hashingService: HashingService,
  ) {}

  async create(dto: CreateAdminDto) {
    const admin = await this.prismaService.admin.findUnique({
      where: { email: dto.email },
    });

    if (admin) {
      throw new ConflictException("Admin already exits!");
    }

    return await this.prismaService.admin.create({
      data: { ...dto },
    });
  }

  async getAdmins({ limit, offset, page, size }: Pagination, search: string) {
    const searchQuery: Prisma.AdminWhereInput[] = [];

    if (search) {
      searchQuery.push({
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      });
    }

    const [count, admins] = await this.prismaService.$transaction([
      this.prismaService.admin.count({
        where: {
          AND: searchQuery,
        },
      }),
      this.prismaService.admin.findMany({
        take: limit,
        skip: offset,
        omit: { password: true },
        orderBy: { createdAt: "asc" },
        where: {
          AND: searchQuery,
        },
      }),
    ]);

    return {
      page,
      size,
      count,
      data: admins,
    };
  }

  async findById(id: string) {
    const admin = await this.prismaService.admin.findUnique({
      where: { id },
      omit: { password: true },
    });

    if (!admin) {
      throw new NotFoundException("Admin not found!");
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

  async update(id: string, dto: UpdateAdminDto) {
    const admin = await this.findById(id);

    return this.prismaService.admin.update({
      where: { id: admin.id },
      data: { ...dto },
      omit: { password: true },
    });
  }

  async updatePassword(id: string, dto: UpdatePasswordDto) {
    const admin = await this.prismaService.admin.findUnique({
      where: { id },
    });

    const isValid = await this.hashingService.compare(
      dto.old_password,
      admin.password,
    );

    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    const newPassword = await this.hashingService.hash(dto.new_password);

    await this.prismaService.admin.update({
      where: { id: admin.id },
      data: { password: newPassword },
    });

    return {
      message: "Password has been successfully updated!",
    };
  }

  async deleteAdmin(id: string) {
    const admin = await this.prismaService.admin.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!admin) {
      throw new NotFoundException("Admin not found!");
    }

    await this.prismaService.admin.delete({
      where: { id: admin.id },
    });

    return {
      message: "Admin account has been successfully deleted.",
    };
  }
}
