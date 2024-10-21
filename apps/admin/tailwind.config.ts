// Tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@collex/tailwind-config";

const config = {
  darkMode: "class",
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,

    // Include packages if not transpiling
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
} satisfies Config;

export default config;
