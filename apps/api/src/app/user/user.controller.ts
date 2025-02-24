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
import { Role } from "src/lib/enum";
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

  //!Fix: Req user type
  @Put("/info")
  async updateProfile(@Req() req: any, @Body() dto: UpdateUserDto) {
    return this.userService.update(req.id, dto);
  }

  //!Fix: Req user type
  @Patch("/password")
  @HttpCode(HttpStatus.NO_CONTENT)
  async updatePassword(@Req() req: any, @Body() dto: UpdatePasswordDto) {
    return this.userService.updatePassword(req.id, dto);
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
