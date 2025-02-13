import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUUID()
  banner_image: string;

  @IsUUID()
  thumbnail_image: string;
}
