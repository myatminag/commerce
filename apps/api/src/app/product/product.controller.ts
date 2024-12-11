import { Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }
}
