import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty()
  old_password: string;

  @IsString()
  @IsNotEmpty()
  new_password: string;
}
