/*
  Warnings:

  - You are about to drop the column `created_at` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `banner_image` on the `brand` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `brand` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail_image` on the `brand` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `brand` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_fee` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `item_count` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `sub_total_price` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `total_discount` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `total_weight` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `banner_image` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `parent_id` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail_image` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_number` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `shop_name` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `admin_id` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `recipient_type` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `cart_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_fee` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `item_count` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `order_date` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `order_no` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `order_note` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `order_status` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `sub_total_price` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `total_discount` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `total_weight` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_date` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_method` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_status` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `total_amount` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `brand_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `cart_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `discount_amount` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `discount_end_date` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `discount_start_date` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `discount_type` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `feature_image` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `is_available` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price_max` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price_min` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `weight_unit` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `product_variant` table. All the data in the column will be lost.
  - You are about to drop the column `feature_image` on the `product_variant` table. All the data in the column will be lost.
  - You are about to drop the column `is_available` on the `product_variant` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `product_variant` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `product_variant` table. All the data in the column will be lost.
  - You are about to drop the column `ads_image` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `banner_image` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `contact_email` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `contact_phone` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_options` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `maintenance_mode` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `pickup_available` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `shopping_hours` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `social_links` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `tax_rate` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `system_config` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `wishlist` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `wishlist` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `wishlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId]` on the table `invoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[invoiceNumber]` on the table `invoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderNo]` on the table `order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId]` on the table `order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transactionId]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderId]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bannerImage` to the `brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailImage` to the `brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryFee` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemCount` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotalPrice` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalDiscount` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalWeight` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceNumber` to the `invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopName` to the `invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipientType` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryFee` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemCount` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderDate` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderNo` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderStatus` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotalPrice` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalDiscount` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalWeight` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentDate` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethod` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandId` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureImage` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceMax` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceMin` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `featureImage` to the `product_variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `product_variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `system_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `system_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryOptions` to the `system_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoppingHours` to the `system_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxRate` to the `system_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `system_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenExpiry` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `wishlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart" DROP CONSTRAINT "cart_user_id_fkey";

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "invoice" DROP CONSTRAINT "invoice_order_id_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_user_id_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_user_id_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_order_id_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_product_id_fkey";

-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_order_id_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_category_id_fkey";

-- DropForeignKey
ALTER TABLE "product_variant" DROP CONSTRAINT "product_variant_product_id_fkey";

-- DropForeignKey
ALTER TABLE "wishlist" DROP CONSTRAINT "wishlist_user_id_fkey";

-- DropIndex
DROP INDEX "cart_user_id_key";

-- DropIndex
DROP INDEX "invoice_invoice_number_key";

-- DropIndex
DROP INDEX "invoice_order_id_idx";

-- DropIndex
DROP INDEX "invoice_order_id_key";

-- DropIndex
DROP INDEX "order_cart_id_key";

-- DropIndex
DROP INDEX "order_order_date_idx";

-- DropIndex
DROP INDEX "order_order_no_key";

-- DropIndex
DROP INDEX "order_order_status_idx";

-- DropIndex
DROP INDEX "payment_order_id_key";

-- DropIndex
DROP INDEX "payment_payment_date_idx";

-- DropIndex
DROP INDEX "payment_transaction_id_key";

-- DropIndex
DROP INDEX "product_variant_product_id_idx";

-- AlterTable
ALTER TABLE "admin" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "brand" DROP COLUMN "banner_image",
DROP COLUMN "created_at",
DROP COLUMN "thumbnail_image",
DROP COLUMN "updated_at",
ADD COLUMN     "bannerImage" JSONB NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "thumbnailImage" JSONB NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "cart" DROP COLUMN "created_at",
DROP COLUMN "delivery_fee",
DROP COLUMN "item_count",
DROP COLUMN "sub_total_price",
DROP COLUMN "tenant_id",
DROP COLUMN "total_discount",
DROP COLUMN "total_price",
DROP COLUMN "total_weight",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deliveryFee" INTEGER NOT NULL,
ADD COLUMN     "itemCount" INTEGER NOT NULL,
ADD COLUMN     "subTotalPrice" INTEGER NOT NULL,
ADD COLUMN     "totalDiscount" INTEGER NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL,
ADD COLUMN     "totalWeight" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "banner_image",
DROP COLUMN "created_at",
DROP COLUMN "parent_id",
DROP COLUMN "thumbnail_image",
DROP COLUMN "updated_at",
ADD COLUMN     "bannerImage" JSONB,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parentId" TEXT,
ADD COLUMN     "thumbnailImage" JSONB,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "created_at",
DROP COLUMN "invoice_number",
DROP COLUMN "order_id",
DROP COLUMN "shop_name",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "invoiceNumber" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "shopName" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "admin_id",
DROP COLUMN "created_at",
DROP COLUMN "recipient_type",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "adminId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "recipientType" "RecipientType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order" DROP COLUMN "cart_id",
DROP COLUMN "created_at",
DROP COLUMN "delivery_fee",
DROP COLUMN "item_count",
DROP COLUMN "order_date",
DROP COLUMN "order_no",
DROP COLUMN "order_note",
DROP COLUMN "order_status",
DROP COLUMN "sub_total_price",
DROP COLUMN "total_discount",
DROP COLUMN "total_price",
DROP COLUMN "total_weight",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "cartId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deliveryFee" INTEGER NOT NULL,
ADD COLUMN     "itemCount" INTEGER NOT NULL,
ADD COLUMN     "orderDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "orderNo" TEXT NOT NULL,
ADD COLUMN     "orderNote" TEXT,
ADD COLUMN     "orderStatus" "OrderStatus" NOT NULL,
ADD COLUMN     "subTotalPrice" INTEGER NOT NULL,
ADD COLUMN     "totalDiscount" INTEGER NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL,
ADD COLUMN     "totalWeight" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "created_at",
DROP COLUMN "order_id",
DROP COLUMN "product_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "created_at",
DROP COLUMN "order_id",
DROP COLUMN "payment_date",
DROP COLUMN "payment_method",
DROP COLUMN "payment_status",
DROP COLUMN "total_amount",
DROP COLUMN "transaction_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "paymentDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL,
ADD COLUMN     "paymentStatus" "PaymentStatus",
ADD COLUMN     "totalAmount" INTEGER NOT NULL,
ADD COLUMN     "transactionId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "brand_id",
DROP COLUMN "cart_id",
DROP COLUMN "category_id",
DROP COLUMN "created_at",
DROP COLUMN "discount_amount",
DROP COLUMN "discount_end_date",
DROP COLUMN "discount_start_date",
DROP COLUMN "discount_type",
DROP COLUMN "feature_image",
DROP COLUMN "is_available",
DROP COLUMN "price_max",
DROP COLUMN "price_min",
DROP COLUMN "updated_at",
DROP COLUMN "weight_unit",
ADD COLUMN     "brandId" TEXT NOT NULL,
ADD COLUMN     "cartId" TEXT,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "discountAmount" INTEGER DEFAULT 0,
ADD COLUMN     "discountEndDate" TIMESTAMP(3),
ADD COLUMN     "discountStartDate" TIMESTAMP(3),
ADD COLUMN     "discountType" "Discount",
ADD COLUMN     "featureImage" TEXT NOT NULL,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "priceMax" INTEGER NOT NULL,
ADD COLUMN     "priceMin" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "weightUnit" "Weight" NOT NULL DEFAULT 'KG';

-- AlterTable
ALTER TABLE "product_variant" DROP COLUMN "created_at",
DROP COLUMN "feature_image",
DROP COLUMN "is_available",
DROP COLUMN "product_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "featureImage" TEXT NOT NULL,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "productId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "system_config" DROP COLUMN "ads_image",
DROP COLUMN "banner_image",
DROP COLUMN "contact_email",
DROP COLUMN "contact_phone",
DROP COLUMN "created_at",
DROP COLUMN "delivery_options",
DROP COLUMN "maintenance_mode",
DROP COLUMN "pickup_available",
DROP COLUMN "shopping_hours",
DROP COLUMN "social_links",
DROP COLUMN "tax_rate",
DROP COLUMN "updated_at",
ADD COLUMN     "adsImage" JSONB,
ADD COLUMN     "bannerImage" JSONB,
ADD COLUMN     "contactEmail" VARCHAR(255) NOT NULL,
ADD COLUMN     "contactPhone" VARCHAR(15) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deliveryOptions" JSONB NOT NULL,
ADD COLUMN     "isMaintenanceMode" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPickUpAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "shoppingHours" JSONB NOT NULL,
ADD COLUMN     "socialLinks" JSONB,
ADD COLUMN     "taxRate" DECIMAL(5,2) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "token" TEXT NOT NULL,
ADD COLUMN     "tokenExpiry" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "wishlist" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cart_userId_key" ON "cart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_orderId_key" ON "invoice"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_invoiceNumber_key" ON "invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "invoice_orderId_idx" ON "invoice"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "order_orderNo_key" ON "order"("orderNo");

-- CreateIndex
CREATE UNIQUE INDEX "order_cartId_key" ON "order"("cartId");

-- CreateIndex
CREATE INDEX "order_orderStatus_idx" ON "order"("orderStatus");

-- CreateIndex
CREATE INDEX "order_orderDate_idx" ON "order"("orderDate");

-- CreateIndex
CREATE UNIQUE INDEX "payment_transactionId_key" ON "payment"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "payment_orderId_key" ON "payment"("orderId");

-- CreateIndex
CREATE INDEX "payment_paymentDate_idx" ON "payment"("paymentDate");

-- CreateIndex
CREATE INDEX "product_variant_productId_idx" ON "product_variant"("productId");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
