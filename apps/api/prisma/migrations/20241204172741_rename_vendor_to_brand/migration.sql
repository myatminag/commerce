/*
  Warnings:

  - You are about to drop the column `vendor_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `vendor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brand_id` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_vendor_id_fkey";

-- DropForeignKey
ALTER TABLE "vendor" DROP CONSTRAINT "vendor_tenant_id_fkey";

-- DropIndex
DROP INDEX "product_vendor_id_idx";

-- AlterTable
ALTER TABLE "_FeatureFlagsToTenant" ADD CONSTRAINT "_FeatureFlagsToTenant_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_FeatureFlagsToTenant_AB_unique";

-- AlterTable
ALTER TABLE "_ProductToWishlist" ADD CONSTRAINT "_ProductToWishlist_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ProductToWishlist_AB_unique";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "vendor_id",
ADD COLUMN     "brand_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "vendor";

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
    "tenant_id" TEXT NOT NULL,

    CONSTRAINT "brand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brand_slug_key" ON "brand"("slug");

-- CreateIndex
CREATE INDEX "brand_tenant_id_idx" ON "brand"("tenant_id");

-- CreateIndex
CREATE INDEX "brand_name_idx" ON "brand"("name");

-- CreateIndex
CREATE INDEX "product_brand_id_idx" ON "product"("brand_id");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "brand" ADD CONSTRAINT "brand_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
