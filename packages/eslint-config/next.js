import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginNext from "@next/eslint-plugin-next";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nextJsConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
    },
  },
];

// const { resolve } = require("node:path");

// const project = resolve(process.cwd(), "tsconfig.json");

// /*
//  * This is a custom ESLint configuration for use with
//  * Next.js apps.
//  *
//  * This config extends the Vercel Engineering Style Guide.
//  * For more information, see https://github.com/vercel/style-guide
//  *
//  */

// module.exports = {
//   extends: [
//     "@vercel/style-guide/eslint/node",
//     "@vercel/style-guide/eslint/typescript",
//     "@vercel/style-guide/eslint/browser",
//     "@vercel/style-guide/eslint/react",
//     "@vercel/style-guide/eslint/next",
//     "eslint-config-turbo",
//   ].map(require.resolve),
//   parserOptions: {
//     project,
//   },
//   globals: {
//     React: true,
//     JSX: true,
//   },
//   settings: {
//     "import/resolver": {
//       typescript: {
//         project,
//       },
//       node: {
//         extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
//       },
//     },
//   },
//   ignorePatterns: ["node_modules/", "dist/"],
//   /**
//    * Add rules configurations here
//    *
//    * Value => 0, Severity Level => off
//    * Value => 1, Severity Level => warn
//    * Value => 2, Severity Level => error
//    */
//   rules: {
//     "no-nested-ternary": "off",
//     "dot-notation": "off",
//     "no-console": "warn",
//     "import/order": "off",
//     "react/jsx-sort-props": [
//       2,
//       {
//         ignoreCase: true,
//         noSortAlphabetically: true,
//       },
//     ],
//     "react/function-component-definition": [
//       2,
//       {
//         namedComponents: ["arrow-function", "function-declaration"],
//         unnamedComponents: "arrow-function",
//       },
//     ],
//     "react/jsx-key": [
//       2,
//       {
//         warnOnDuplicates: true,
//         checkFragmentShorthand: true,
//       },
//     ],
//     "import/no-default-export": "off",
//     "import/no-named-as-default": "off",
//     "jsx-a11y/click-events-have-key-events": "off",
//     "jsx-a11y/no-noninteractive-element-interactions": "off",
//     "@typescript-eslint/no-explicit-any": "off",
//     "@typescript-eslint/no-unsafe-return": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/dot-notation": "off",
//     "@typescript-eslint/no-misused-promises": "off",
//     "@typescript-eslint/no-confusing-void-expression": "off",
//     "@typescript-eslint/no-unnecessary-condition": "off",
//     "@typescript-eslint/prefer-nullish-coalescing": "off",
//     "@typescript-eslint/restrict-template-expressions": "off",
//     "@typescript-eslint/prefer-promise-reject-errors": "off",
//   },
// };
