/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `CartItems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItems_id_key" ON "CartItems"("id");
