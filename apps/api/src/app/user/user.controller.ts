import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiHeader } from "@nestjs/swagger";

import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@ApiTags("user")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Get()
  async get() {
    return await this.userService.getAll();
  }
}
