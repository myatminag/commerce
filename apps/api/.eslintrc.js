module.exports = {
  extends: ["@collex/eslint-config/nest.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};
