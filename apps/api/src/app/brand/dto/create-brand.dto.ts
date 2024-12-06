import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  banner_image: string;

  @IsString()
  @IsNotEmpty()
  thumbnail_image: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ readOnly: true })
  tenant_id: string;
}
