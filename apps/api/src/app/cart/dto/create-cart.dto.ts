import { IsArray, IsNotEmpty, IsString, Min } from "class-validator";

class CartProductDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @Min(1)
  quantity: number;
}

export class CreateCartDto {
  @IsArray()
  products: CartProductDto[];
}
