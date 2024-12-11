/*
  Warnings:

  - A unique constraint covering the columns `[tenant_id,slug]` on the table `brand` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "brand_slug_key";

-- CreateIndex
CREATE UNIQUE INDEX "brand_tenant_id_slug_key" ON "brand"("tenant_id", "slug");
