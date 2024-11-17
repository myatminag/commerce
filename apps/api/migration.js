/* eslint-disable @typescript-eslint/no-require-imports */
const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter migration name: ", (migrationName) => {
  rl.close();

  const command = `dotenv -e .env.development -- npx prisma migrate dev --name ${migrationName}`;
  console.log(`Running: ${command}`);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});
