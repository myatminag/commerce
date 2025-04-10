import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from "class-validator";

import { ShoppingHoursMode } from "src/lib/constants";

export class CreateSettingsDto {
  @IsString()
  @IsNotEmpty()
  shoppingHours: string;

  @IsEnum(ShoppingHoursMode)
  @IsNotEmpty()
  shoppingHoursMode: ShoppingHoursMode;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsString({ each: true })
  socialLinks: string[];

  @IsArray()
  @IsUUID("4", { each: true })
  banner: string[];

  @IsArray()
  @IsUUID("4", { each: true })
  ads: string[];

  @IsBoolean()
  @IsNotEmpty()
  isDeliveryAvailable: boolean;
}
