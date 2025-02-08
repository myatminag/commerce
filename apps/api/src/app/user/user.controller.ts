import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Put,
  Query,
  Req,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { Roles } from "src/decorators/roles.decorator";
import { RequestUserType } from "src/types/request-user.type";
import { Role } from "src/types/roles.enum";
import { DeleteUsersDto } from "./dto/delete-users.dto";
import { QueryParamsDto } from "./dto/query-params.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

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
  async updateProfile(@Req() req: RequestUserType, @Body() dto: UpdateUserDto) {
    return this.userService.update(req.user.id, dto);
  }

  @Patch("/password")
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePassword(
    @Req() req: RequestUserType,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(req.user.id, dto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }

  @Delete()
  @Roles(Role.Admin)
  async deleteUsers(@Body() dto: DeleteUsersDto) {
    return this.userService.deleteUsers(dto);
  }
}
