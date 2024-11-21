import { OmitType } from "@nestjs/swagger";
import { UserLoginDto } from "./user-login.dto";

export class ForgotPasswordDto extends OmitType(UserLoginDto, ["password"]) {}
