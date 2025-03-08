import { OmitType } from "@nestjs/swagger";

import { CreateUserDto } from "src/app/user/dto/create-user.dto";

export class UserSignUpDto extends OmitType(CreateUserDto, [
  "avatar",
] as const) {}
