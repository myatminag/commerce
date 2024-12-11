import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateSubCategoryDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  names: string[];

  @IsString()
  @IsNotEmpty()
  parent_id: string;
}
