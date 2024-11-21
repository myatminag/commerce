import { Controller, Get } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";

import { UserService } from "./user.service";

@ApiTags("users")
@ApiHeader({ name: "tenant-id", required: true })
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async get() {
    return await this.userService.getAll();
  }
}
