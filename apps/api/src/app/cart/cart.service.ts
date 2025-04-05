import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateCartDto } from "./dto/create-cart.dto";

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}

  async create(id: string, dto: CreateCartDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!user) {
      throw new NotFoundException("User not found!");
    }

    const productIds = dto.products.map((product) => product.productId);
    const products = await this.prismaService.product.findMany({
      where: { id: { in: productIds } },
    });

    if (products.length !== dto.products.length) {
      throw new NotFoundException("Some products not found!");
    }

    let subTotalPrice = 0;
    let totalWeight = 0;

    const cartProducts = dto.products.map(({ productId, quantity }) => {
      const product = products.find((product) => product.id === productId);

      if (!product) {
        throw new NotFoundException("Product not found!");
      }

      const price = product.discountPrice ?? product.price;

      subTotalPrice += price * quantity;
      totalWeight += product.weight * quantity;

      return {
        id: productId,
      };
    });

    const tax = Math.round(subTotalPrice * 0.05);
    const deliveryFee = totalWeight > 5000 ? 1000 : 500;
    const totalPrice = subTotalPrice + tax + deliveryFee;

    return this.prismaService.cart.create({
      data: {
        user: { connect: { id: user.id } },
        deliveryFee,
        tax,
        itemCount: cartProducts.length,
        subTotalPrice,
        totalPrice,
        totalWeight,
        currency: "mmk",
        product: {
          connect: cartProducts,
        },
      },
      include: {
        product: true,
      },
    });
  }

  async getCart(id: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId: id },
      omit: { userId: true },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            slug: true,
            sku: true,
            featureImage: true,
            price: true,
            discountPrice: true,
          },
        },
      },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found!");
    }

    return cart;
  }

  async updateCart(id: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId: id },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found!");
    }
  }

  async removeCart(id: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId: id },
      select: { id: true },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found!");
    }

    await this.prismaService.cart.delete({
      where: { id: cart.id },
    });

    return {
      message: "Cart removed successfully!",
    };
  }
}
