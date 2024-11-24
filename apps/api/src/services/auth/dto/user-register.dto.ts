import { PickType } from "@nestjs/swagger";

import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class UserRegisterDto extends PickType(CreateUserDto, [
  "username",
  "email",
  "phone",
  "password",
  "tenant_id",
]) {}
