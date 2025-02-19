import { IsNotEmpty, IsString } from "class-validator";

export class UpdateSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  parentId: string;
}
