import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";

import { PrismaService } from "src/services/prisma/prisma.service";

import { Pagination } from "src/decorators/pagination.decorator";
import { HashingService } from "src/services/auth/hashing/hashing.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUsersDto } from "./dto/delete-users.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private hashingService: HashingService,
  ) {}

  async create(dto: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: dto.email },
    });

    if (user) {
      throw new ConflictException("User already exits!");
    }

    return await this.prismaService.user.create({
      data: { ...dto },
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.findById(id);

    return this.prismaService.user.update({
      where: { id: user.id },
      data: { ...dto },
      omit: { password: true },
    });
  }

  async updatePassword(id: string, dto: UpdatePasswordDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    const isValid = await this.hashingService.compare(
      dto.old_password,
      user.password,
    );

    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    const newPassword = await this.hashingService.hash(dto.new_password);

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { password: newPassword },
    });

    return {
      message: "Password has been successfully updated!",
    };
  }

  async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      omit: {
        password: true,
        token: true,
        tokenExpiry: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found!");
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException("User not found!");
    }

    return user;
  }

  async getUsers({ page, size, limit, offset }: Pagination, search: string) {
    const searchQuery: Prisma.UserWhereInput[] = [];

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

    const [count, users] = await this.prismaService.$transaction([
      this.prismaService.user.count({
        where: {
          AND: searchQuery,
        },
      }),
      this.prismaService.user.findMany({
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
      users,
    };
  }

  async deleteUser(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: { id: true },
    });

    await this.prismaService.user.delete({
      where: { id: user.id },
    });

    return {
      message: "This account has been successfully deleted.",
    };
  }

  async deleteUsers(dto: DeleteUsersDto) {
    const existingUsers = await this.prismaService.user.findMany({
      where: { id: { in: dto.ids } },
      select: { id: true },
    });

    const validIds = existingUsers.map((user) => user.id);

    if (validIds.length === 0) {
      throw new NotFoundException("There is no matching users id!");
    }

    await this.prismaService.user.deleteMany({
      where: { id: { in: validIds } },
    });

    return {
      message: "Users have been successfully deleted.",
    };
  }
}
