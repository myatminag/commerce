/*
  Warnings:

  - Added the required column `tenant_id` to the `product_variant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_variant" ADD COLUMN     "tenant_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "product_variant" ADD CONSTRAINT "product_variant_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
