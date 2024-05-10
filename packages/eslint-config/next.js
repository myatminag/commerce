const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  /**
   * Add rules configurations here
   *
   * Value => 0, Severity Level => off
   * Value => 1, Severity Level => warn
   * Value => 2, Severity Level => error
   */
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-default-export': 'off',
    'no-console': 'warn',
    'import/order': [
      2,
      {
        groups: [
          ['builtin', 'external'], // Built-in types are first
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'off',
      },
    ],
    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true,
        noSortAlphabetically: true,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
