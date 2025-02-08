import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { compare, genSalt, hash } from "bcrypt";

import { PrismaService } from "src/services/prisma/prisma.service";

import { CreateUserDto } from "./dto/create-user.dto";
import { DeleteUsersDto } from "./dto/delete-users.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: dto.email },
    });

    if (user) {
      throw new ConflictException("User already exits!");
    }

    return await this.prismaService.user.create({
      data: { ...dto },
      omit: { password: true },
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
    const user = await this.findById(id);

    const isValid = await compare(dto.old_password, user.password);

    if (!isValid) {
      throw new UnauthorizedException("Invalid credentials!");
    }

    const salt = await genSalt();
    const newPassword = await hash(dto.new_password, salt);

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

  async getUsers({ limit, offset, search }: QueryParamsDto) {
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
      this.prismaService.user.count(),
      this.prismaService.user.findMany({
        take: limit,
        skip: (offset - 1) * limit,
        omit: { password: true },
        orderBy: { created_at: "asc" },
        where: {
          AND: searchQuery,
        },
      }),
    ]);

    return {
      count,
      users,
    };
  }

  async deleteUser(id: string) {
    const user = await this.findById(id);

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
      throw new NotFoundException("There is no matching user ids!");
    }

    await this.prismaService.user.deleteMany({
      where: { id: { in: validIds } },
    });

    return {
      message: "Users have been successfully deleted.",
    };
  }
}
