/*
  Warnings:

  - You are about to drop the column `systemConfigId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `systemConfigId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the `SystemConfig` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Delivery` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_systemConfigId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_systemConfigId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "systemConfigId",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "systemConfigId";

-- DropTable
DROP TABLE "SystemConfig";

-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "shoppingHours" TEXT NOT NULL,
    "shoppingHoursMode" "ShoppingHoursMode" NOT NULL DEFAULT 'everyday',
    "phoneNumber" VARCHAR(15) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "socialLinks" JSONB,
    "banner" JSONB,
    "ads" JSONB,
    "currency" "Currency" NOT NULL DEFAULT 'mmk',
    "isDeliveryAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_name_key" ON "Delivery"("name");
