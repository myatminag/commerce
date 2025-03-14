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
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

import { ApiPagination, Pagination } from "src/decorators/pagination.decorator";
import { ActiveUser } from "src/services/auth/decorators/active-user.decorator";
import { IsAdmin } from "src/services/auth/decorators/is-admin.decorator";
import { ActiveUserData } from "src/services/auth/interfaces/active-user.interface";
import { DeleteUsersDto } from "./dto/delete-users.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @IsAdmin()
  @ApiPagination()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @ApiQuery({ name: "search", required: false, type: String })
  @Get()
  async getUsers(
    @Pagination() pagination: Pagination,
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

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete()
  async deleteUsers(@Body() dto: DeleteUsersDto) {
    return this.userService.deleteUsers(dto);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @Get(":id")
  async findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @IsAdmin()
  @ApiOperation({
    summary: "Accessible only with admin credentials.",
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
}
