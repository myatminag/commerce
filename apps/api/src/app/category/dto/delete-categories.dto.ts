import { ArrayNotEmpty, IsArray, IsString } from "class-validator";

export class DeleteCategoriesDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  slugs: string[];
}
