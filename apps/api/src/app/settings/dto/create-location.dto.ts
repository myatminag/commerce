import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsBoolean()
  @IsNotEmpty()
  isPickupAvaiable: boolean;
}
