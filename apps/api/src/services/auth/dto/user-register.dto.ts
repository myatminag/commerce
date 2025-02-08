import { PickType } from "@nestjs/swagger";

import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class UserRegisterDto extends PickType(CreateUserDto, [
  "name",
  "email",
  "phone",
  "password",
]) {}
