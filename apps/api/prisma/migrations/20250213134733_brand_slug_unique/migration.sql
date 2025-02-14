/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `feature_flags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenant` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `brand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "cart_tenant_id_idx";

-- DropIndex
DROP INDEX "user_username_idx";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "username",
ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "feature_flags";

-- DropTable
DROP TABLE "subscription";

-- DropTable
DROP TABLE "tenant";

-- DropEnum
DROP TYPE "PlanType";

-- CreateIndex
CREATE UNIQUE INDEX "brand_slug_key" ON "brand"("slug");

-- CreateIndex
CREATE INDEX "user_name_idx" ON "user"("name");
