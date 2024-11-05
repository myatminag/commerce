import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateTenantDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  domain: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsObject()
  metadata?: object;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
