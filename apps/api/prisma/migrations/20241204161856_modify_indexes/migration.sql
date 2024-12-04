/*
  Warnings:

  - Added the required column `order_date` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "admin_tenant_id_idx";

-- DropIndex
DROP INDEX "cart_tenant_id_idx";

-- DropIndex
DROP INDEX "category_tenant_id_idx";

-- DropIndex
DROP INDEX "invoice_tenant_id_idx";

-- DropIndex
DROP INDEX "notification_tenant_id_idx";

-- DropIndex
DROP INDEX "order_tenant_id_idx";

-- DropIndex
DROP INDEX "payment_tenant_id_idx";

-- DropIndex
DROP INDEX "product_tenant_id_idx";

-- DropIndex
DROP INDEX "subscription_tenant_id_idx";

-- DropIndex
DROP INDEX "system_config_tenant_id_idx";

-- DropIndex
DROP INDEX "user_tenant_id_phone_idx";

-- DropIndex
DROP INDEX "user_tenant_id_username_idx";

-- DropIndex
DROP INDEX "vendor_tenant_id_idx";

-- DropIndex
DROP INDEX "wishlist_tenant_id_idx";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "order_date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "system_config" ALTER COLUMN "currency" SET DEFAULT 'MMK';

-- CreateIndex
CREATE INDEX "admin_tenant_id_idx" ON "admin"("tenant_id");

-- CreateIndex
CREATE INDEX "cart_tenant_id_idx" ON "cart"("tenant_id");

-- CreateIndex
CREATE INDEX "category_tenant_id_idx" ON "category"("tenant_id");

-- CreateIndex
CREATE INDEX "category_name_idx" ON "category"("name");

-- CreateIndex
CREATE INDEX "invoice_tenant_id_idx" ON "invoice"("tenant_id");

-- CreateIndex
CREATE INDEX "invoice_order_id_idx" ON "invoice"("order_id");

-- CreateIndex
CREATE INDEX "notification_tenant_id_idx" ON "notification"("tenant_id");

-- CreateIndex
CREATE INDEX "order_tenant_id_idx" ON "order"("tenant_id");

-- CreateIndex
CREATE INDEX "order_order_status_idx" ON "order"("order_status");

-- CreateIndex
CREATE INDEX "order_order_date_idx" ON "order"("order_date");

-- CreateIndex
CREATE INDEX "payment_tenant_id_idx" ON "payment"("tenant_id");

-- CreateIndex
CREATE INDEX "payment_payment_date_idx" ON "payment"("payment_date");

-- CreateIndex
CREATE INDEX "product_tenant_id_idx" ON "product"("tenant_id");

-- CreateIndex
CREATE INDEX "product_category_id_idx" ON "product"("category_id");

-- CreateIndex
CREATE INDEX "product_vendor_id_idx" ON "product"("vendor_id");

-- CreateIndex
CREATE INDEX "product_name_idx" ON "product"("name");

-- CreateIndex
CREATE INDEX "product_variant_product_id_idx" ON "product_variant"("product_id");

-- CreateIndex
CREATE INDEX "subscription_tenant_id_idx" ON "subscription"("tenant_id");

-- CreateIndex
CREATE INDEX "system_config_tenant_id_idx" ON "system_config"("tenant_id");

-- CreateIndex
CREATE INDEX "tenant_domain_idx" ON "tenant"("domain");

-- CreateIndex
CREATE INDEX "tenant_name_idx" ON "tenant"("name");

-- CreateIndex
CREATE INDEX "user_username_idx" ON "user"("username");

-- CreateIndex
CREATE INDEX "vendor_tenant_id_idx" ON "vendor"("tenant_id");

-- CreateIndex
CREATE INDEX "vendor_name_idx" ON "vendor"("name");

-- CreateIndex
CREATE INDEX "wishlist_tenant_id_idx" ON "wishlist"("tenant_id");
