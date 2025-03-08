import { PickType } from "@nestjs/swagger";

import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class UserSignInDto extends PickType(CreateUserDto, [
  "email",
  "password",
] as const) {}
