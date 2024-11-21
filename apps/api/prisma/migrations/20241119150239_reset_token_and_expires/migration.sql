/*
  Warnings:

  - A unique constraint covering the columns `[reset_token]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "expired_at" TIMESTAMP(3),
ADD COLUMN     "reset_token" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_reset_token_key" ON "user"("reset_token");
