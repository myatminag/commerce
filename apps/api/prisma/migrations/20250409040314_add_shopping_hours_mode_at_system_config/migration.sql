-- CreateEnum
CREATE TYPE "ShoppingHoursMode" AS ENUM ('everyday', 'weekdays', 'weekends');

-- AlterTable
ALTER TABLE "SystemConfig" ADD COLUMN     "shoppingHoursMode" "ShoppingHoursMode" NOT NULL DEFAULT 'everyday';
