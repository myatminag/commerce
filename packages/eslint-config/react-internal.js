import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
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
//  * This is a custom ESLint configuration for use a library
//  * that utilizes React.
//  *
//  * This config extends the Vercel Engineering Style Guide.
//  * For more information, see https://github.com/vercel/style-guide
//  *
//  */

// module.exports = {
//   extends: [
//     "@vercel/style-guide/eslint/browser",
//     "@vercel/style-guide/eslint/typescript",
//     "@vercel/style-guide/eslint/react",
//   ].map(require.resolve),
//   parserOptions: {
//     project,
//   },
//   globals: {
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
//   ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
//   /**
//    * Add rules configurations here
//    *
//    * Value => 0, Severity Level => off
//    * Value => 1, Severity Level => warn
//    * Value => 2, Severity Level => error
//    */
//   rules: {
//     "import/no-default-export": "off",
//     "import/no-extraneous-dependencies": "off",
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
//     "react/self-closing-comp": "off",
//     "react/jsx-no-leaked-render": "off",
//     "react/jsx-key": [
//       2,
//       {
//         warnOnDuplicates: true,
//         checkFragmentShorthand: true,
//       },
//     ],
//     "unicorn/filename-case": [
//       "error",
//       {
//         cases: {
//           camelCase: true,
//           kebabCase: true,
//         },
//       },
//     ],
//     "@typescript-eslint/restrict-template-expressions": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/no-empty-interface": "off",
//     "@typescript-eslint/consistent-type-imports": "off",
//     "@typescript-eslint/no-confusing-void-expression": "off",
//     "@typescript-eslint/no-unnecessary-condition": "off",
//     "@typescript-eslint/no-explicit-any": "off",
//     "@typescript-eslint/no-unsafe-assignment": "off",
//     "@typescript-eslint/no-unsafe-argument": "off",
//     "@typescript-eslint/no-shadow": "off",
//   },
//   overrides: [
//     {
//       files: ["*.config.js"],
//       env: {
//         node: true,
//       },
//     },
//   ],
// };
