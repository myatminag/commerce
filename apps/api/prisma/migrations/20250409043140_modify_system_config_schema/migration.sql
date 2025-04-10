/*
  Warnings:

  - You are about to drop the column `address` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryOptions` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `isPickUpAvailable` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `pickUpAddress` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `SystemConfig` table. The data in that column could be lost. The data in that column will be cast from `JsonB` to `VarChar(255)`.
  - You are about to alter the column `phoneNumber` on the `SystemConfig` table. The data in that column could be lost. The data in that column will be cast from `JsonB` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE "SystemConfig" DROP COLUMN "address",
DROP COLUMN "deliveryOptions",
DROP COLUMN "isPickUpAvailable",
DROP COLUMN "pickUpAddress",
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "phoneNumber" SET DATA TYPE VARCHAR(15);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "systemConfigId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "isPickupAvaiable" BOOLEAN NOT NULL DEFAULT true,
    "systemConfigId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_systemConfigId_fkey" FOREIGN KEY ("systemConfigId") REFERENCES "SystemConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_systemConfigId_fkey" FOREIGN KEY ("systemConfigId") REFERENCES "SystemConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;
