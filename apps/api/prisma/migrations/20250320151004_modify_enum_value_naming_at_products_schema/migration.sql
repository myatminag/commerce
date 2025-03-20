/*
  Warnings:

  - The values [PERCENTAGE,KYATS] on the enum `Discount` will be removed. If these variants are still used in the database, this will fail.
  - The values [KG,G,LBS] on the enum `Weight` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `updateAt` on the `category` table. All the data in the column will be lost.
  - The `tokenExpiry` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `updatedAt` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Discount_new" AS ENUM ('percentage', 'kyats');
ALTER TABLE "product" ALTER COLUMN "discountType" TYPE "Discount_new" USING ("discountType"::text::"Discount_new");
ALTER TYPE "Discount" RENAME TO "Discount_old";
ALTER TYPE "Discount_new" RENAME TO "Discount";
DROP TYPE "Discount_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Weight_new" AS ENUM ('kg', 'g', 'lbs');
ALTER TABLE "product" ALTER COLUMN "weightUnit" DROP DEFAULT;
ALTER TABLE "product" ALTER COLUMN "weightUnit" TYPE "Weight_new" USING ("weightUnit"::text::"Weight_new");
ALTER TYPE "Weight" RENAME TO "Weight_old";
ALTER TYPE "Weight_new" RENAME TO "Weight";
DROP TYPE "Weight_old";
ALTER TABLE "product" ALTER COLUMN "weightUnit" SET DEFAULT 'kg';
COMMIT;

-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "token" TEXT,
ADD COLUMN     "tokenExpiry" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "category" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "weightUnit" SET DEFAULT 'kg';

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "token" DROP NOT NULL,
DROP COLUMN "tokenExpiry",
ADD COLUMN     "tokenExpiry" TIMESTAMP(3);
