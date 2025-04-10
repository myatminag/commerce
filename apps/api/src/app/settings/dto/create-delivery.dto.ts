import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateDeliveryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  fee: number;

  @IsString()
  @IsNotEmpty()
  duration: string;
}
