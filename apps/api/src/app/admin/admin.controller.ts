import { Controller, Get } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { AdminService } from "./admin.service";

@ApiTags("admin")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async getAll() {}
}
