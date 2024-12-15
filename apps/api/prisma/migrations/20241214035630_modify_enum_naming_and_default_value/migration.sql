/*
  Warnings:

  - The values [percentage,kyats] on the enum `Discount` will be removed. If these variants are still used in the database, this will fail.
  - The values [pending,confirmed,shipped,delivered,cancelled] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [pending,completed,failed] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [kg,g,lbs] on the enum `Weight` will be removed. If these variants are still used in the database, this will fail.
  - The `status` column on the `notification` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `notification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipient_type` on the `notification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('READ', 'UNREAD', 'ARCHIVE');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('ORDER_CONFIRMATION', 'ORDER_SHIPPED', 'ORDER_DELIVERED', 'ORDER_CACNELLED', 'NEW_ORDER_RECEIVED', 'OUT_OF_STOCK', 'LOW_STOCK_ALERT', 'NEW_PROMOTION', 'DISCOUNT_EXPIRY_ALERT', 'PAYMET_CONFIRMATION', 'PAYMENT_FAILED', 'PASSWORD_CHANGE_CONFIRMATION', 'SYSTEM_MAINTENANCE_ALERT', 'FEATURE_UPDATES', 'POLICY_UPDATES');

-- CreateEnum
CREATE TYPE "RecipientType" AS ENUM ('USER', 'ADMIN');

-- AlterEnum
BEGIN;
CREATE TYPE "Discount_new" AS ENUM ('PERCENTAGE', 'KYATS');
ALTER TABLE "product" ALTER COLUMN "discount_type" TYPE "Discount_new" USING ("discount_type"::text::"Discount_new");
ALTER TYPE "Discount" RENAME TO "Discount_old";
ALTER TYPE "Discount_new" RENAME TO "Discount";
DROP TYPE "Discount_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED');
ALTER TABLE "order" ALTER COLUMN "order_status" TYPE "OrderStatus_new" USING ("order_status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');
ALTER TABLE "payment" ALTER COLUMN "payment_status" TYPE "PaymentStatus_new" USING ("payment_status"::text::"PaymentStatus_new");
ALTER TABLE "subscription" ALTER COLUMN "payment_status" TYPE "PaymentStatus_new" USING ("payment_status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Weight_new" AS ENUM ('KG', 'G', 'LBS');
ALTER TABLE "product" ALTER COLUMN "weight_unit" TYPE "Weight_new" USING ("weight_unit"::text::"Weight_new");
ALTER TYPE "Weight" RENAME TO "Weight_old";
ALTER TYPE "Weight_new" RENAME TO "Weight";
DROP TYPE "Weight_old";
COMMIT;

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "type",
ADD COLUMN     "type" "NotificationType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD',
DROP COLUMN "recipient_type",
ADD COLUMN     "recipient_type" "RecipientType" NOT NULL;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "weight_unit" SET DEFAULT 'KG';

-- DropEnum
DROP TYPE "notification_status";

-- DropEnum
DROP TYPE "notification_type";

-- DropEnum
DROP TYPE "recipient_type";
