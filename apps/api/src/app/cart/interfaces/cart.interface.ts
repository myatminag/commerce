import {
  Cart,
  CartItems,
  Prisma,
  Product,
  ProductVariant,
  User,
} from "@prisma/client";

import { UpdateCartDto } from "../dto/update-cart.dto";
import { CreateCartDto } from "../dto/create-cart.dto";

export type Option = {
  name: string;
  value: string;
};

export type ProductPayload = Prisma.ProductGetPayload<{
  include: { brand: true; category: true };
}>;

export type VariantPayload = Pick<
  ProductVariant,
  "id" | "options" | "featureImage" | "price"
>;

export interface UpdateExistingItemParams {
  cart: Cart;
  dto: UpdateCartDto;
  existingItem: CartItems;
  product: Product;
  pricePerItem: number;
  subTotalPrice: number;
}

export interface CreateNewCartParams {
  dto: CreateCartDto;
  product: ProductPayload;
  pricePerItem: number;
  subTotalPrice: number;
  totalPrice: number;
  user: Pick<User, "id">;
  variant: VariantPayload;
}

export interface AddNewItemToCartParams {
  cart: Cart;
  dto: UpdateCartDto;
  product: ProductPayload;
  pricePerItem: number;
  subTotalPrice: number;
  variant: VariantPayload;
}

export interface CreateCartItemsParams {
  dto: UpdateCartDto;
  product: ProductPayload;
  pricePerItem: number;
  variant: VariantPayload;
}
