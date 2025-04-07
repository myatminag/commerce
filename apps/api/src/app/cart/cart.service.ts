import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Product } from "@prisma/client";

import { PrismaService } from "src/services/prisma/prisma.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import {
  AddNewItemToCartParams,
  CreateCartItemsParams,
  CreateNewCartParams,
  Option,
  UpdateExistingItemParams,
  VariantPayload,
} from "./interfaces/cart.interface";

@Injectable()
export class CartService {
  private readonly DELIVERY_FEE = 3_500;
  private readonly CURRENCY = "mmk";

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
          },
          brand: true,
          category: true,
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

    if (!variant) {
      throw new NotFoundException("Product variant not found!");
    }

    const { pricePerItem, subTotalPrice, totalPrice } = this.calculatePrices(
      product,
      variant,
      dto.quantity,
    );

    const cart = await this.prismaService.cart.findUnique({
      where: { userId: id },
      include: { items: true },
    });

    if (!cart) {
      return this.createNewCart({
        dto,
        product,
        user,
        variant,
        pricePerItem,
        subTotalPrice,
        totalPrice,
      });
    }

    const existingItem = cart.items.find(
      (i) => i.productId === product.id && i.id === dto.variantId,
    );

    if (existingItem) {
      return this.updateExistingItem({
        cart,
        dto,
        existingItem,
        product,
        pricePerItem,
        subTotalPrice,
      });
    } else {
      return this.addNewItemToCart({
        cart,
        dto,
        product,
        pricePerItem,
        subTotalPrice,
        variant,
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

  private parsedSelectedOption(
    options: Prisma.JsonValue,
    variants: Prisma.JsonValue,
  ): Option[] {
    const selectedOption = JSON.parse(options as string) as Option[];
    const selectedVariant = JSON.parse(variants as string) as string[];

    return selectedOption.map((opt, index) => ({
      name: opt.name,
      value: selectedVariant[index] ?? null,
    }));
  }

  private parsedSelectedVariant(variant: Prisma.JsonValue): string[] {
    return JSON.parse(JSON.stringify(variant));
  }

  private calculatePrices(
    product: Product,
    variant: VariantPayload,
    quantity: number,
  ) {
    const variantPrice = variant.price ?? null;
    const basePrice = product.discountPrice ?? product.price;
    const pricePerItem = variantPrice ?? basePrice;
    const subTotalPrice = pricePerItem * quantity;
    const totalPrice = subTotalPrice + this.DELIVERY_FEE;

    return { pricePerItem, subTotalPrice, totalPrice };
  }

  private async updateExistingItem(params: UpdateExistingItemParams) {
    const { cart, dto, existingItem, product, pricePerItem, subTotalPrice } =
      params;

    const priceIncrease = pricePerItem * dto.quantity;
    const discountAmount = (product.discountAmount ?? 0) * dto.quantity;

    return await this.prismaService.cart.update({
      where: { id: cart.id },
      data: {
        itemCount: cart.itemCount + dto.quantity,
        subTotalPrice: cart.subTotalPrice + subTotalPrice,
        totalPrice: cart.totalPrice + subTotalPrice,
        totalDiscount: cart.totalDiscount + discountAmount,
        totalWeight: cart.totalWeight + product.weight * dto.quantity,
        items: {
          update: {
            where: { id: existingItem.id },
            data: {
              quantity: existingItem.quantity + dto.quantity,
              price: existingItem.price + priceIncrease,
              discountAmount: existingItem.discountAmount + discountAmount,
              discountPrice: existingItem.discountPrice + priceIncrease,
            },
          },
        },
      },
      include: { items: true },
    });
  }

  private async createNewCart(params: CreateNewCartParams) {
    const {
      dto,
      product,
      user,
      variant,
      pricePerItem,
      subTotalPrice,
      totalPrice,
    } = params;

    const cartItems = this.createCartItems({
      dto,
      pricePerItem,
      product,
      variant,
    });

    return await this.prismaService.cart.create({
      data: {
        currency: this.CURRENCY,
        itemCount: dto.quantity,
        subTotalPrice,
        totalPrice,
        totalDiscount: product.discountAmount ?? 0,
        totalWeight: product.weight * dto.quantity,
        deliveryFee: 3500,
        items: { create: cartItems },
        user: { connect: { id: user.id } },
      },
      include: {
        items: true,
      },
    });
  }

  private async addNewItemToCart(params: AddNewItemToCartParams) {
    const { cart, dto, product, pricePerItem, subTotalPrice, variant } = params;

    const discountAmount = (product.discountAmount ?? 0) * dto.quantity;

    const cartItems = this.createCartItems({
      dto,
      pricePerItem,
      product,
      variant,
    });

    return await this.prismaService.cart.update({
      where: { id: cart.id },
      data: {
        itemCount: cart.itemCount + dto.quantity,
        subTotalPrice: cart.subTotalPrice + subTotalPrice,
        totalPrice: cart.totalPrice + subTotalPrice,
        totalDiscount: cart.totalDiscount + discountAmount,
        totalWeight: cart.totalWeight + product.weight * dto.quantity,
        items: { create: cartItems },
      },
      include: {
        items: true,
      },
    });
  }

  private createCartItems(
    params: CreateCartItemsParams,
  ): Prisma.CartItemsCreateInput {
    const { dto, pricePerItem, product, variant } = params;

    return {
      id: variant.id,
      productId: product.id,
      name: product.name,
      slug: product.slug,
      sku: product.sku,
      description: product.description,
      image: variant?.featureImage ?? product.featureImage,
      price: pricePerItem * dto.quantity,
      quantity: dto.quantity,
      discountAmount: product.discountAmount,
      discountPrice: pricePerItem * dto.quantity,
      weight: product.weight,
      weightUnit: product.weightUnit,
      options: this.parsedSelectedOption(product.options, variant.options),
      variants: this.parsedSelectedVariant(variant.options),
      category: {
        connect: { id: product.category.id },
      },
      brand: {
        connect: { id: product.brand.id },
      },
    };
  }
}
