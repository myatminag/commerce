import { Prisma } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";

import { UpdateCartDto } from "./dto/update-cart.dto";

export type CreateOrUpdate = {
  dto: UpdateCartDto;
  user: {
    id: string;
  };
  product: {
    brand: {
      name: string;
      id: string;
    };
    category: {
      name: string;
      id: string;
    };
    productVariant: {
      featureImage: string;
      options: JsonValue;
    }[];
  } & Prisma.ProductCreateInput;
  subTotalPrice: number;
  totalPrice: number;
  selectedOption: Option[];
  selectedVariant: string[];
  variant: any;
};

export type Option = {
  name: string;
  value: string;
};
