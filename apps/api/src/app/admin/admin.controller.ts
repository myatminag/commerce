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

import {
  ApiPagination,
  Pagination,
  PaginationParams,
} from "src/decorators/pagination.decorator";
import { ActiveUser } from "src/services/auth/decorators/active-user.decorator";
import { IsAdmin } from "src/services/auth/decorators/is-admin.decorator";
import { ActiveUserData } from "src/services/auth/interfaces/active-user.interface";
import { AdminService } from "./admin.service";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";

@ApiTags("admin")
@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}

  @IsAdmin()
  @ApiPagination()
  @ApiQuery({ name: "search", required: false, type: String })
  @Get()
  async getAdmins(
    @PaginationParams() pagination: Pagination,
    @Query("search") search?: string,
  ) {
    return await this.adminService.getAdmins(pagination, search);
  }

  @IsAdmin()
  @HttpCode(HttpStatus.CREATED)
  @Put("profile")
  async update(
    @ActiveUser() activeUser: ActiveUserData,
    @Body() dto: UpdateAdminDto,
  ) {
    return this.adminService.update(activeUser.sub, dto);
  }

  @IsAdmin()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch("password")
  async updatePassword(
    @ActiveUser() activeUser: ActiveUserData,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.adminService.updatePassword(activeUser.sub, dto);
  }

  @IsAdmin()
  @Get(":id")
  async findById(@Param("id") id: string) {
    return await this.adminService.findById(id);
  }

  @IsAdmin()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.adminService.deleteAdmin(id);
  }
}
