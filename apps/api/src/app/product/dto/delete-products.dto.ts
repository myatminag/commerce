import { ArrayNotEmpty, IsArray, IsString } from "class-validator";

export class DeleteProductsDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];
}
