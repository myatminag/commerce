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
} from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";

import { AdminOnly } from "src/decorators/admin-only.decorator";
import {
  ApiPagination,
  Pagination,
  PaginationParams,
} from "src/decorators/pagination.decorator";
import { ActiveUser } from "src/services/auth/decorators/active-user.decorator";
import { ActiveUserData } from "src/services/auth/interfaces/active-user.interface";
import { DeleteUsersDto } from "./dto/delete-users.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @AdminOnly()
  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
  async getUsers(
    @PaginationParams() pagination: Pagination,
    @Query("search") search?: string,
  ) {
    return this.userService.getUsers(pagination, search);
  }

  @Get("profile")
  async getProfile(@ActiveUser() activeUser: ActiveUserData) {
    return this.userService.findById(activeUser.sub);
  }

  @HttpCode(HttpStatus.CREATED)
  @Put("profile")
  async updateProfile(
    @ActiveUser() activeUser: ActiveUserData,
    @Body() dto: UpdateUserDto,
  ) {
    return this.userService.update(activeUser.sub, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch("password")
  async updatePassword(
    @ActiveUser() activeUser: ActiveUserData,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(activeUser.sub, dto);
  }

  @Delete()
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUsers(@Body() dto: DeleteUsersDto) {
    return this.userService.deleteUsers(dto);
  }

  @Get(":id")
  @AdminOnly()
  async findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Delete(":id")
  @AdminOnly()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
}
