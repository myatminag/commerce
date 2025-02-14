import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateBrandDto } from "./create-brand.dto";

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  slug?: string;
}
