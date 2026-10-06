import js from '@eslint/js';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

const tsconfigRootDir = fileURLToPath(new globalThis.URL('.', import.meta.url));

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        URL: 'readonly',
      },
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
  prettier,
];
