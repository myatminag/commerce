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

import { Discount, Status, Weight } from "src/lib/constants";

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
  featureImage: string;

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
  isAvailable: boolean;

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
  featureImage: string;

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
  priceMax: number;

  @IsNumber()
  @IsNotEmpty()
  priceMin: number;

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

  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;

  @IsBoolean()
  @IsNotEmpty()
  isAvailable: boolean;

  @IsNumber()
  @IsOptional()
  weight: number;

  @IsEnum(Weight)
  @IsNotEmpty()
  weightUnit: Weight;

  @IsEnum(Discount)
  @IsOptional()
  discountType?: Discount;

  @IsNumber()
  @IsOptional()
  discountAmount?: number;

  @IsNumber()
  @IsOptional()
  discountPrice?: number;

  @IsDate()
  @IsOptional()
  discountStartDate?: Date;

  @IsDate()
  @IsOptional()
  discountEndDate?: Date;

  @IsString()
  @IsNotEmpty()
  brandId: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductVariantDto)
  productVariant: ProductVariantDto[];
}
