import { PickType } from "@nestjs/swagger";

import { CreateCartDto } from "./create-cart.dto";

export class UpdateCartDto extends PickType(CreateCartDto, [
  "quantity",
] as const) {}
