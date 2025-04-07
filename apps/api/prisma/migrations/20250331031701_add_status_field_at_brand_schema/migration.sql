-- CreateEnum
CREATE TYPE "Status" AS ENUM ('publish', 'draft');

-- AlterTable
ALTER TABLE "brand" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'publish';
