import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { AdminService } from "./admin.service";

@ApiTags("admin")
@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async getAll() {
    return "admin";
  }
}
