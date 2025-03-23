import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";

import { Discount } from "src/lib/constants";

export class DiscountProductDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids: string[];

  @IsEnum(Discount)
  discountType: Discount;

  @IsNumber()
  discountAmount: number;

  @IsDate()
  @Type(() => Date)
  discountStartDate: Date;

  @IsDate()
  @Type(() => Date)
  discountEndDate: Date;
}
