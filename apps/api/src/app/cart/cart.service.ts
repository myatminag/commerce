import { Injectable, NotFoundException } from "@nestjs/common";
import { Cart, CartItems, Prisma, Product } from "@prisma/client";

import {
  AddNewItemToCartParams,
  CreateCartItemsParams,
  CreateNewCartParams,
  Option,
  UpdateExistingItemParams,
  VariantPayload,
} from "./interfaces/cart.interface";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { PrismaService } from "src/services/prisma/prisma.service";

@Injectable()
export class CartService {
  private readonly DELIVERY_FEE = 3_500;
  private readonly CURRENCY = "mmk";

  constructor(private prismaService: PrismaService) {}

  async add(userId: string, dto: CreateCartDto) {
    const [user, product] = await Promise.all([
      this.prismaService.user.findUnique({
        where: { id: userId },
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
      where: { userId },
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

  async getCart(userId: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
      omit: { userId: true },
      include: {
        items: {
          omit: { cartId: true },
        },
      },
    });

    return cart;
  }

  async updateItemQuantity(
    userId: string,
    dto: UpdateCartDto,
    action: "increase" | "decrease",
  ) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
      include: {
        items: true,
      },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found!");
    }

    const item = cart.items.find(
      (i) => i.productId === dto.productId && i.id === dto.variantId,
    );

    if (!item) {
      throw new NotFoundException("Item not found!");
    }

    const unitPrice = item.price / item.quantity;
    const unitWeight = item.weight / item.quantity || 0;
    const unitDiscountPrice = item.discountPrice / item.quantity || 0;
    const unitDiscountAmount = item.discountAmount / item.quantity || 0;
    const quantity = action === "increase" ? dto.quantity : -dto.quantity;
    const newQuantity = Math.max(0, item.quantity + quantity);

    if (newQuantity === 0) {
      return this.deleteCartItem(cart, item);
    }

    const price = unitPrice * quantity;
    const weight = unitWeight * quantity;
    const discount = unitDiscountAmount * quantity;

    const updatedCart = await this.prismaService.cart.update({
      where: { id: cart.id },
      data: {
        itemCount: cart.itemCount + quantity,
        subTotalPrice: cart.subTotalPrice + price,
        totalPrice: cart.subTotalPrice + price + this.DELIVERY_FEE,
        totalDiscount: cart.totalDiscount + discount,
        totalWeight: cart.totalWeight + weight,
        items: {
          update: {
            where: { id: item.id },
            data: {
              quantity: newQuantity,
              price: unitPrice * newQuantity,
              discountAmount: unitDiscountAmount * newQuantity,
              discountPrice: unitDiscountPrice * newQuantity,
            },
          },
        },
      },
      include: { items: true },
    });

    return this.cleanupEmptyCart(updatedCart);
  }

  async removeCartItem(userId: string, itemId: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
      include: { items: true },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found!");
    }

    const item = cart.items.find((i) => i.id === itemId);

    return this.deleteCartItem(cart, item);
  }

  async deleteCart(userId: string) {
    const cart = await this.prismaService.cart.findUnique({
      where: { userId },
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
      include: { items: true },
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
      include: { items: true },
    });
  }

  private async deleteCartItem(
    cart: Omit<Cart, "userId">,
    item: Omit<CartItems, "cartId">,
  ) {
    const updatedCart = await this.prismaService.cart.update({
      where: { id: cart.id },
      data: {
        itemCount: cart.itemCount - item.quantity,
        subTotalPrice: cart.subTotalPrice - item.price,
        totalPrice: cart.subTotalPrice - item.price + this.DELIVERY_FEE,
        totalDiscount: cart.totalDiscount - item.discountAmount,
        totalWeight: cart.totalWeight - item.weight * item.quantity,
        items: {
          delete: { id: item.id },
        },
      },
      include: { items: true },
    });

    return this.cleanupEmptyCart(updatedCart);
  }

  private async cleanupEmptyCart(
    cart: Prisma.CartGetPayload<{ include: { items: true } }>,
  ) {
    if (cart.items.length === 0) {
      await this.prismaService.cart.delete({
        where: { id: cart.id },
      });
      return null;
    }

    return cart;
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
