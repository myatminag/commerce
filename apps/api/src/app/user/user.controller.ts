import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Put,
  Query,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { Roles } from "src/decorators/roles.decorator";
import { RequestUserType } from "src/types/request-user.type";
import { Role } from "src/types/roles.enum";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@ApiTags("users")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("users")
export class UserController {
  constructor(
    private userService: UserService,
    @Inject(REQUEST) private request: RequestUserType,
  ) {}

  @Get()
  @Roles(Role.Admin)
  async getUsers(@Query() dto: QueryParamsDto) {
    return this.userService.getUsers(dto);
  }

  @Get(":id")
  @Roles(Role.Admin)
  async findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Put("/info")
  async updateProfile(@Body() dto: UpdateUserDto) {
    return this.userService.update(this.request.user.id, dto);
  }

  @Patch("/password")
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePassword(@Body() dto: UpdatePasswordDto) {
    return this.userService.updatePassword(this.request.user.id, dto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }

  @Delete()
  @Roles(Role.Admin)
  async deleteUsers(@Body() ids: string[]) {
    return this.userService.deleteUsers(ids);
  }
}
