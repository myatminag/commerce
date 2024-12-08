/*
  Warnings:

  - A unique constraint covering the columns `[tenant_id,slug]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tenant_id,slug]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "category_slug_key";

-- DropIndex
DROP INDEX "product_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "category_tenant_id_slug_key" ON "category"("tenant_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "product_tenant_id_slug_key" ON "product"("tenant_id", "slug");
