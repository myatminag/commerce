import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMainCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  banner_image?: string;

  @IsString()
  @IsOptional()
  thumbnail_image?: string;
}
