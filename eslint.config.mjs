import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from "eslint-plugin-prettier/recommended";

export default [
  {
    files: ['src/**/*.ts'],
    rules: {
      'no-console': 'off',
      'no-useless-constructor': 'off',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'max-len': ['error', { code: 100 }],
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'object-curly-spacing': ['error', 'always'],

      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['interface', 'class', 'enum'],
          format: ['PascalCase'],
        },
        {
          selector: ['variable'],
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: ['function', 'classMethod'],
          format: ['camelCase'],
        },
        {
          selector: ['classProperty'],
          format: ['camelCase'],
        },
        {
          selector: ['enumMember'],
          format: ['UPPER_CASE'],
        },
      ],
    },
  },
  {
    languageOptions: { globals: globals.node },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
