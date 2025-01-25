-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('READ', 'UNREAD', 'ARCHIVE');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('ORDER_CONFIRMATION', 'ORDER_SHIPPED', 'ORDER_DELIVERED', 'ORDER_CACNELLED', 'NEW_ORDER_RECEIVED', 'OUT_OF_STOCK', 'LOW_STOCK_ALERT', 'NEW_PROMOTION', 'DISCOUNT_EXPIRY_ALERT', 'PAYMET_CONFIRMATION', 'PAYMENT_FAILED', 'PASSWORD_CHANGE_CONFIRMATION', 'SYSTEM_MAINTENANCE_ALERT', 'FEATURE_UPDATES', 'POLICY_UPDATES');

-- CreateEnum
CREATE TYPE "RecipientType" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('AYAPAY', 'KBZPAY', 'WAVEPAY');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "Weight" AS ENUM ('KG', 'G', 'LBS');

-- CreateEnum
CREATE TYPE "Discount" AS ENUM ('PERCENTAGE', 'KYATS');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('MONTHLY', 'ANNUALLY');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('MMK');

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brand" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "banner_image" JSONB NOT NULL,
    "thumbnail_image" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "delivery_fee" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "item_count" INTEGER NOT NULL,
    "sub_total_price" INTEGER NOT NULL,
    "total_discount" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "total_weight" INTEGER NOT NULL,
    "currency" "Currency" NOT NULL,
    "note" TEXT,
    "tenant_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "banner_image" JSONB,
    "thumbnail_image" JSONB,
    "parent_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_flags" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feature_flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "invoice_number" TEXT NOT NULL,
    "shop_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD',
    "recipient_type" "RecipientType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "admin_id" TEXT NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "order_no" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "cart_id" TEXT NOT NULL,
    "delivery_fee" INTEGER NOT NULL,
    "tax" INTEGER NOT NULL,
    "item_count" INTEGER NOT NULL,
    "sub_total_price" INTEGER NOT NULL,
    "total_discount" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "total_weight" INTEGER NOT NULL,
    "order_status" "OrderStatus" NOT NULL,
    "order_note" TEXT,
    "order_date" TIMESTAMP(3) NOT NULL,
    "currency" "Currency" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "payment_status" "PaymentStatus",
    "payment_method" "PaymentMethod" NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "order_id" TEXT NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "sku" VARCHAR(255) NOT NULL,
    "options" JSONB,
    "description" TEXT NOT NULL,
    "feature_image" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "price" INTEGER NOT NULL,
    "price_max" INTEGER NOT NULL,
    "price_min" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "profit" INTEGER NOT NULL,
    "brand_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "weight_unit" "Weight" NOT NULL DEFAULT 'KG',
    "discount_type" "Discount",
    "discount_amount" INTEGER DEFAULT 0,
    "discount_start_date" TIMESTAMP(3),
    "discount_end_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cart_id" TEXT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_variant" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "product_id" TEXT,
    "options" JSONB NOT NULL,
    "feature_image" TEXT NOT NULL,
    "sku" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "profit" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "plan_type" "PlanType" NOT NULL,
    "plan_price" INTEGER NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "payment_status" "PaymentStatus",
    "transaction_id" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_config" (
    "id" TEXT NOT NULL,
    "delivery_options" JSONB NOT NULL,
    "tax_rate" DECIMAL(5,2) NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'MMK',
    "banner_image" JSONB,
    "ads_image" JSONB,
    "shopping_hours" JSONB NOT NULL,
    "pickup_available" BOOLEAN NOT NULL DEFAULT true,
    "maintenance_mode" BOOLEAN NOT NULL DEFAULT false,
    "contact_email" VARCHAR(255) NOT NULL,
    "contact_phone" VARCHAR(15) NOT NULL,
    "social_links" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenant" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "domain" TEXT NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "email" VARCHAR(255),
    "metadata" JSONB,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "avatar" TEXT,
    "username" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "address" TEXT,
    "city" VARCHAR(255),
    "township" VARCHAR(255),
    "reset_token" TEXT,
    "expired_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToWishlist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductToWishlist_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_phone_key" ON "admin"("phone");

-- CreateIndex
CREATE INDEX "brand_name_idx" ON "brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cart_user_id_key" ON "cart"("user_id");

-- CreateIndex
CREATE INDEX "cart_tenant_id_idx" ON "cart"("tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "category_slug_key" ON "category"("slug");

-- CreateIndex
CREATE INDEX "category_name_idx" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "feature_flags_name_key" ON "feature_flags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_order_id_key" ON "invoice"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "invoice_invoice_number_key" ON "invoice"("invoice_number");

-- CreateIndex
CREATE INDEX "invoice_order_id_idx" ON "invoice"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "order_order_no_key" ON "order"("order_no");

-- CreateIndex
CREATE UNIQUE INDEX "order_cart_id_key" ON "order"("cart_id");

-- CreateIndex
CREATE INDEX "order_order_status_idx" ON "order"("order_status");

-- CreateIndex
CREATE INDEX "order_order_date_idx" ON "order"("order_date");

-- CreateIndex
CREATE UNIQUE INDEX "payment_transaction_id_key" ON "payment"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_order_id_key" ON "payment"("order_id");

-- CreateIndex
CREATE INDEX "payment_payment_date_idx" ON "payment"("payment_date");

-- CreateIndex
CREATE UNIQUE INDEX "product_slug_key" ON "product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "product_sku_key" ON "product"("sku");

-- CreateIndex
CREATE INDEX "product_name_idx" ON "product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_variant_sku_key" ON "product_variant"("sku");

-- CreateIndex
CREATE INDEX "product_variant_product_id_idx" ON "product_variant"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_domain_key" ON "tenant"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_phone_key" ON "tenant"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_email_key" ON "tenant"("email");

-- CreateIndex
CREATE INDEX "tenant_domain_idx" ON "tenant"("domain");

-- CreateIndex
CREATE INDEX "tenant_name_idx" ON "tenant"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_reset_token_key" ON "user"("reset_token");

-- CreateIndex
CREATE INDEX "user_username_idx" ON "user"("username");

-- CreateIndex
CREATE INDEX "_ProductToWishlist_B_index" ON "_ProductToWishlist"("B");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToWishlist" ADD CONSTRAINT "_ProductToWishlist_A_fkey" FOREIGN KEY ("A") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToWishlist" ADD CONSTRAINT "_ProductToWishlist_B_fkey" FOREIGN KEY ("B") REFERENCES "wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
