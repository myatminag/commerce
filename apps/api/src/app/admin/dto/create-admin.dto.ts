import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
