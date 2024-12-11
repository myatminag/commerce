import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from "class-validator";

import { Weight, Discount } from "src/types/enum";

export class ProductOptionDto {
  @IsString()
  name: string;

  @IsNumber()
  position: number;

  @IsArray()
  @IsString({ each: true })
  values: string[];
}

export class ProductImagesDto {
  @IsString()
  type: string;

  @IsString()
  url: string;
}

export class ProductVariantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  product_id: string;

  @IsArray()
  @IsNotEmpty()
  options: string[];

  @IsString()
  @IsNotEmpty()
  feature_image: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsNumber()
  @IsString()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsJSON()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProductOptionDto)
  options?: ProductOptionDto[];

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  feature_image: string;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductImagesDto)
  images: ProductImagesDto[];

  @IsNumber()
  @IsString()
  price: number;

  @IsNumber()
  @IsString()
  price_max: number;

  @IsNumber()
  @IsString()
  cost: number;

  @IsString()
  @IsNotEmpty()
  brand_id: string;

  @IsString()
  @IsNotEmpty()
  category_id: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  stock: number;

  @IsBoolean()
  @IsNotEmpty()
  is_available: boolean;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsEnum(Weight)
  @IsNotEmpty()
  weight_unit: Weight;

  @IsEnum(Discount)
  @IsNotEmpty()
  discount_type: Discount;

  @IsNumber()
  @IsNotEmpty()
  discount_amount: number;

  @IsOptional()
  @IsDate()
  discount_start_date?: Date;

  @IsOptional()
  @IsDate()
  discount_end_date?: Date;

  @IsOptional()
  product_variant: ProductVariantDto;
}
