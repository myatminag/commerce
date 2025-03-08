/*
  Warnings:

  - You are about to drop the column `username` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `expired_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `reset_token` on the `user` table. All the data in the column will be lost.
  - Added the required column `name` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "user_reset_token_key";

-- AlterTable
ALTER TABLE "admin" DROP COLUMN "username",
ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "expired_at",
DROP COLUMN "reset_token";
