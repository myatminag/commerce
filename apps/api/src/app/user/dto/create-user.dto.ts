import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  avatar?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  address?: string;

  @IsString()
  @IsNotEmpty()
  township?: string;

  @IsString()
  @IsNotEmpty()
  city?: string;
}
