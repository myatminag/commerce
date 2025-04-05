/*
  Warnings:

  - You are about to drop the column `quantity` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `totalDiscount` on the `cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cart" DROP COLUMN "quantity",
DROP COLUMN "totalDiscount";
