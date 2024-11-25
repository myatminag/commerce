import { PickType } from "@nestjs/swagger";
import { CreateAdminDto } from "src/app/admin/dto/create-admin.dto";

export class AdminLoginDto extends PickType(CreateAdminDto, [
  "email",
  "password",
]) {}
