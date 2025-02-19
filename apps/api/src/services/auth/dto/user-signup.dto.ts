import { PickType } from "@nestjs/swagger";

import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class UserSignUpDto extends PickType(CreateUserDto, [
  "name",
  "email",
  "phone",
  "password",
]) {}
