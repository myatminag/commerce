/*
  Warnings:

  - You are about to drop the column `tenant_id` on the `product_variant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_variant" DROP CONSTRAINT "product_variant_tenant_id_fkey";

-- AlterTable
ALTER TABLE "product_variant" DROP COLUMN "tenant_id";
