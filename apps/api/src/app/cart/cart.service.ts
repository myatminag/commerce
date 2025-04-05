import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateOrUpdate, Option } from "./cart.type";
import { CreateCartDto } from "./dto/create-cart.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}

  async add(id: string, dto: CreateCartDto) {
    const [user, product] = await Promise.all([
      this.prismaService.user.findUnique({
        where: { id },
        select: { id: true },
      }),
      this.prismaService.product.findUnique({
        where: { id: dto.productId },
        include: {
          productVariant: {
            where: { id: dto.variantId },
            select: { options: true, featureImage: true },
          },
          brand: {
            select: { id: true, name: true },
          },
          category: {
            select: { id: true, name: true },
          },
        },
      }),
    ]);

    if (!user) {
      throw new NotFoundException("User not found!");
    }

    if (!product) {
      throw new NotFoundException("Product not found!");
    }

    const variant = product.productVariant[0];
    const option = JSON.parse(product.options as string) as Option[];
    const selectedVariant = JSON.parse(variant.options as string) as string[];

    const selectedOption = option.map((otp, index) => ({
      name: otp.name,
      value: selectedVariant[index] ?? null,
    }));

    const deliveryFee = 3500;
    const pricePerItem = product.discountPrice ?? product.price;
    const subTotalPrice = pricePerItem * dto.quantity;
    const totalPrice = subTotalPrice + deliveryFee;

    const cart = await this.prismaService.cart.findUnique({
      where: { userId: id },
      include: { items: true },
    });

    if (!cart) {
      return this.createOrUpdate({
        user,
        dto,
        subTotalPrice,
        totalPrice,
        variant,
        product,
        selectedOption,
        selectedVariant,
      });
    }

    const existingItem = cart.items.find(
      (item) => item.productId === product.id,
    );

    if (existingItem) {
      return await this.prismaService.cart.update({
        where: { id: cart.id },
        data: {
          itemCount: cart.itemCount + dto.quantity,
          subTotalPrice: cart.subTotalPrice + subTotalPrice,
          totalPrice: cart.totalPrice + totalPrice - deliveryFee,
          totalDiscount: cart.totalDiscount + (product.discountAmount ?? 0),
          totalWeight: cart.totalWeight + product.weight * dto.quantity,
          items: {
            update: {
              where: { id: existingItem.id },
              data: {
                quantity: existingItem.quantity + dto.quantity,
                price: existingItem.price + pricePerItem * dto.quantity,
                discountAmount:
                  existingItem.discountAmount + product.discountAmount,
                discountPrice:
                  existingItem.discountPrice + pricePerItem * dto.quantity,
              },
            },
          },
        },
        include: { items: true },
      });
    } else {
      return this.createOrUpdate({
        user,
        dto,
        variant,
        subTotalPrice,
        totalPrice,
        selectedOption,
        selectedVariant,
        product,
      });
    }
  }

  async getCart(id: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId: id },
      omit: { userId: true },
      include: {
        items: true,
      },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found!");
    }

    return cart;
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

  private async createOrUpdate({
    dto,
    user,
    product,
    subTotalPrice,
    totalPrice,
    variant,
    selectedOption,
    selectedVariant,
  }: CreateOrUpdate) {
    const cartItems: Prisma.CartItemsCreateInput = {
      productId: product.id,
      name: product.name,
      slug: product.slug,
      sku: product.sku,
      description: product.description,
      image: variant?.featureImage ?? product.featureImage,
      price: (product.discountPrice ?? product.price) * dto.quantity,
      quantity: dto.quantity,
      discountAmount: product.discountAmount,
      discountPrice: (product.discountPrice ?? product.price) * dto.quantity,
      weight: product.weight,
      weightUnit: product.weightUnit,
      options: selectedOption,
      variants: selectedVariant,
      category: {
        connect: { id: product.category.id },
      },
      brand: {
        connect: { id: product.brand.id },
      },
    };

    return await this.prismaService.cart.upsert({
      where: { userId: user.id },
      update: {
        currency: "mmk",
        itemCount: dto.quantity,
        subTotalPrice,
        totalPrice,
        totalDiscount: product.discountAmount ?? 0,
        totalWeight: product.weight * dto.quantity,
        deliveryFee: 3500,
        items: { create: cartItems },
        user: {
          connect: { id: user.id },
        },
      },
      create: {
        currency: "mmk",
        itemCount: dto.quantity,
        subTotalPrice,
        totalPrice,
        totalDiscount: product.discountAmount ?? 0,
        totalWeight: product.weight * dto.quantity,
        deliveryFee: 3500,
        items: { create: cartItems },
        user: {
          connect: { id: user.id },
        },
      },
      include: {
        items: true,
      },
    });
  }
}
