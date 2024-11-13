import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prismaService.instance.user.create({
      data: {
        ...dto,
      },
    });

    return user;
  }

  async getAll() {
    const user = await this.prismaService.instance.user.findMany({
      omit: { password: true },
    });

    return user;
  }
}
