import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from "class-validator";
import { Discount, Weight } from "@prisma/client";

export class ProductOptionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  position: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
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
  @MaxLength(255)
  name: string;

  @IsArray()
  @IsNotEmpty()
  options: string[];

  @IsString()
  @IsNotEmpty()
  feature_image: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  sku: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  profit: number;

  @IsBoolean()
  @IsNotEmpty()
  is_available: boolean;

  @IsNumber()
  @IsNotEmpty()
  weight: number;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  sku: string;

  @IsArray()
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

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductImagesDto)
  images: ProductImagesDto[];

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  price_max: number;

  @IsNumber()
  @IsNotEmpty()
  price_min: number;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  profit: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  stock: number;

  @IsBoolean()
  @IsNotEmpty()
  is_available: boolean;

  @IsNumber()
  @IsOptional()
  weight: number;

  @IsEnum(Weight)
  @IsNotEmpty()
  weight_unit: Weight;

  @IsEnum(Discount)
  @IsOptional()
  discount_type?: Discount;

  @IsNumber()
  @IsOptional()
  discount_amount?: number;

  @IsDate()
  @IsOptional()
  discount_start_date?: Date;

  @IsDate()
  @IsOptional()
  discount_end_date?: Date;

  @IsString()
  @IsNotEmpty()
  brand_id: string;

  @IsString()
  @IsNotEmpty()
  category_id: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProductVariantDto)
  product_variant: ProductVariantDto[];
}
