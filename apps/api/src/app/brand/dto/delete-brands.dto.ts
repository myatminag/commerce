import { ArrayNotEmpty, IsArray, IsString } from "class-validator";

export class DeleteBrandsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}
