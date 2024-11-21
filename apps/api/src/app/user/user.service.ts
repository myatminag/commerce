import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { PrismaService } from "src/services/prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prismaService.instance.user.findUnique({
      where: { email: dto.email },
    });

    if (user) {
      throw new ConflictException("User already exits!");
    }

    const newUser = await this.prismaService.instance.user.create({
      data: { ...dto },
      omit: { password: true },
    });

    return newUser;
  }

  async update(dto: UpdateUserDto) {
    const user = await this.findByEmail(dto.email);

    return this.prismaService.instance.user.update({
      where: { id: user.id },
      data: { ...dto },
      omit: { password: true },
    });
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.instance.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException("User not found!");
    }

    return user;
  }

  async getAll() {
    const user = await this.prismaService.instance.user.findMany({
      omit: { password: true },
    });

    return user;
  }
}
