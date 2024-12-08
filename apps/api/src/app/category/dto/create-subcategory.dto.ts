import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSubCategoryDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  names: string[];

  @IsString()
  @IsNotEmpty()
  parent_id: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ readOnly: true })
  tenant_id?: string;
}
