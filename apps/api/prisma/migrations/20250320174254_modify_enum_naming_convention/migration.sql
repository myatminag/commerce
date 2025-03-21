/*
  Warnings:

  - The values [MMK] on the enum `Currency` will be removed. If these variants are still used in the database, this will fail.
  - The values [READ,UNREAD,ARCHIVE] on the enum `NotificationStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [ORDER_CONFIRMATION,ORDER_SHIPPED,ORDER_DELIVERED,ORDER_CACNELLED,NEW_ORDER_RECEIVED,OUT_OF_STOCK,LOW_STOCK_ALERT,NEW_PROMOTION,DISCOUNT_EXPIRY_ALERT,PAYMET_CONFIRMATION,PAYMENT_FAILED,PASSWORD_CHANGE_CONFIRMATION,SYSTEM_MAINTENANCE_ALERT,FEATURE_UPDATES,POLICY_UPDATES] on the enum `NotificationType` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,CONFIRMED,SHIPPED,DELIVERED,CANCELLED] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [AYAPAY,KBZPAY,WAVEPAY] on the enum `PaymentMethod` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,COMPLETED,FAILED] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [USER,ADMIN] on the enum `RecipientType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Currency_new" AS ENUM ('mmk');
ALTER TABLE "system_config" ALTER COLUMN "currency" DROP DEFAULT;
ALTER TABLE "cart" ALTER COLUMN "currency" TYPE "Currency_new" USING ("currency"::text::"Currency_new");
ALTER TABLE "order" ALTER COLUMN "currency" TYPE "Currency_new" USING ("currency"::text::"Currency_new");
ALTER TABLE "system_config" ALTER COLUMN "currency" TYPE "Currency_new" USING ("currency"::text::"Currency_new");
ALTER TYPE "Currency" RENAME TO "Currency_old";
ALTER TYPE "Currency_new" RENAME TO "Currency";
DROP TYPE "Currency_old";
ALTER TABLE "system_config" ALTER COLUMN "currency" SET DEFAULT 'mmk';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "NotificationStatus_new" AS ENUM ('read', 'unread', 'archive');
ALTER TABLE "notification" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "notification" ALTER COLUMN "status" TYPE "NotificationStatus_new" USING ("status"::text::"NotificationStatus_new");
ALTER TYPE "NotificationStatus" RENAME TO "NotificationStatus_old";
ALTER TYPE "NotificationStatus_new" RENAME TO "NotificationStatus";
DROP TYPE "NotificationStatus_old";
ALTER TABLE "notification" ALTER COLUMN "status" SET DEFAULT 'unread';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "NotificationType_new" AS ENUM ('order_confirmation', 'order_shipped', 'order_delivered', 'order_canceled', 'order_recevied', 'out_of_stock', 'low_stock', 'promotion', 'discount_expired', 'payment_confirmation', 'payment_failed', 'password_change_confirmation', 'system_maintenance', 'feature_updates', 'policy_updates');
ALTER TABLE "notification" ALTER COLUMN "type" TYPE "NotificationType_new" USING ("type"::text::"NotificationType_new");
ALTER TYPE "NotificationType" RENAME TO "NotificationType_old";
ALTER TYPE "NotificationType_new" RENAME TO "NotificationType";
DROP TYPE "NotificationType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('pending', 'confirmed', 'shipped', 'delivered', 'canceled');
ALTER TABLE "order" ALTER COLUMN "orderStatus" TYPE "OrderStatus_new" USING ("orderStatus"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentMethod_new" AS ENUM ('ayapay', 'kbzpay', 'wavepay');
ALTER TABLE "payment" ALTER COLUMN "paymentMethod" TYPE "PaymentMethod_new" USING ("paymentMethod"::text::"PaymentMethod_new");
ALTER TYPE "PaymentMethod" RENAME TO "PaymentMethod_old";
ALTER TYPE "PaymentMethod_new" RENAME TO "PaymentMethod";
DROP TYPE "PaymentMethod_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('pending', 'completed', 'failed');
ALTER TABLE "payment" ALTER COLUMN "paymentStatus" TYPE "PaymentStatus_new" USING ("paymentStatus"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "RecipientType_new" AS ENUM ('user', 'admin');
ALTER TABLE "notification" ALTER COLUMN "recipientType" TYPE "RecipientType_new" USING ("recipientType"::text::"RecipientType_new");
ALTER TYPE "RecipientType" RENAME TO "RecipientType_old";
ALTER TYPE "RecipientType_new" RENAME TO "RecipientType";
DROP TYPE "RecipientType_old";
COMMIT;

-- AlterTable
ALTER TABLE "notification" ALTER COLUMN "status" SET DEFAULT 'unread';

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "discountPrice" INTEGER;

-- AlterTable
ALTER TABLE "system_config" ALTER COLUMN "currency" SET DEFAULT 'mmk';
