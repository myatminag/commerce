import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Put,
  Query,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RequestUserType } from "src/types/request-user.type";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { QueryParamsDto } from "./dto/pagination-params.dto";

@ApiTags("users")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("users")
export class UserController {
  constructor(
    private userService: UserService,
    @Inject(REQUEST) private request: RequestUserType,
  ) {}

  @Get()
  async getUsers(@Query() dto: QueryParamsDto) {
    return this.userService.getUsers(dto);
  }

  @Get("/:id")
  async findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Put("/info")
  async updateProfile(@Body() dto: UpdateUserDto) {
    return this.userService.update(this.request.user.id, dto);
  }

  @Patch("/password")
  async updatePassword(@Body() dto: UpdatePasswordDto) {
    return this.userService.updatePassword(this.request.user.id, dto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }

  @Delete()
  async deleteUsers(@Body() ids: string[]) {
    return this.userService.deleteUsers(ids);
  }
}
