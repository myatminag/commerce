/*
  Warnings:

  - You are about to drop the column `adsImage` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `bannerImage` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `contactEmail` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `isMaintenanceMode` on the `SystemConfig` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `SystemConfig` table. All the data in the column will be lost.
  - Added the required column `address` to the `SystemConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `SystemConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `SystemConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpAddress` to the `SystemConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'publish';

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'publish';

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'publish';

-- AlterTable
ALTER TABLE "SystemConfig" DROP COLUMN "adsImage",
DROP COLUMN "bannerImage",
DROP COLUMN "contactEmail",
DROP COLUMN "contactPhone",
DROP COLUMN "isMaintenanceMode",
DROP COLUMN "tax",
ADD COLUMN     "address" JSONB NOT NULL,
ADD COLUMN     "ads" JSONB,
ADD COLUMN     "banner" JSONB,
ADD COLUMN     "email" JSONB NOT NULL,
ADD COLUMN     "isDeliveryAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "phoneNumber" JSONB NOT NULL,
ADD COLUMN     "pickUpAddress" TEXT NOT NULL,
ALTER COLUMN "shoppingHours" SET DATA TYPE TEXT;
