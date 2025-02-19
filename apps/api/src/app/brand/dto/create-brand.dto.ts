import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUUID()
  bannerImage: string;

  @IsUUID()
  thumbnailImage: string;
}
