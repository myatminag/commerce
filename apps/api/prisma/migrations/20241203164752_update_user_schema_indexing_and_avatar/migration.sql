-- DropIndex
DROP INDEX "user_tenant_id_idx";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "avatar" TEXT;

-- CreateIndex
CREATE INDEX "user_tenant_id_idx" ON "user"("tenant_id");

-- CreateIndex
CREATE INDEX "user_tenant_id_username_idx" ON "user"("tenant_id", "username");

-- CreateIndex
CREATE INDEX "user_tenant_id_phone_idx" ON "user"("tenant_id", "phone");
