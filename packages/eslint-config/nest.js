/*
 * This is a custom ESLint configuration for use with
 * Nest.js app.
 */

module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
