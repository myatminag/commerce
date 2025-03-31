-- AlterTable
ALTER TABLE "category" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'publish';

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'publish';
