import { exec } from "child_process";
import { promisify } from "util";
import { config } from "dotenv";
import { ConfigService } from "@nestjs/config";

config();

const configService = new ConfigService();
const execAsync = promisify(exec);
const args = process.argv[2];

export const runMigration = async () => {
  const databaseUrl = `${configService.get("DATABASE_URL")}?schema=${args}`;

  try {
    console.log(`Running migration for schema: ${args}`);

    await execAsync(`npx prisma db push`);

    console.log(`Migration successful for schema: ${args}`);
  } catch (error) {
    console.error(`Migration failed for schema: ${args}`, error);
  }
};

runMigration().catch((error) => {
  console.log("error", error);
  process.exit(1);
});
