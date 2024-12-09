import { PartialType } from "@nestjs/swagger";

import { CreateMainCategoryDto } from "./create-category.dto";

export class UpdateMainCategoryDto extends PartialType(CreateMainCategoryDto) {}
