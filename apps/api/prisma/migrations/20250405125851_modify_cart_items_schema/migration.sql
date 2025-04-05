/*
  Warnings:

  - You are about to drop the column `tax` on the `Cart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sku]` on the table `CartItems` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId]` on the table `CartItems` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brandId` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discountAmount` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discountPrice` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `options` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variants` to the `CartItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weightUnit` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItems" DROP CONSTRAINT "CartItems_productId_fkey";

-- DropIndex
DROP INDEX "CartItems_cartId_productId_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "tax",
ADD COLUMN     "requiredShipping" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "totalDiscount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "totalWeight" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CartItems" ADD COLUMN     "brandId" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "discountAmount" INTEGER NOT NULL,
ADD COLUMN     "discountPrice" INTEGER NOT NULL,
ADD COLUMN     "discountType" "Discount",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "options" JSONB NOT NULL,
ADD COLUMN     "sku" VARCHAR(255) NOT NULL,
ADD COLUMN     "slug" VARCHAR(255) NOT NULL,
ADD COLUMN     "variants" JSONB NOT NULL,
ADD COLUMN     "weightUnit" "Weight" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItems_sku_key" ON "CartItems"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "CartItems_cartId_key" ON "CartItems"("cartId");

-- AddForeignKey
ALTER TABLE "CartItems" ADD CONSTRAINT "CartItems_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItems" ADD CONSTRAINT "CartItems_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
