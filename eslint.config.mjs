import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.ts"],
    rules: {
      "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
      "no-console": "off",
      "no-useless-constructor": "off",
      "no-empty-function": ["error", { "allow": ["constructors"] }],

      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true, allowTypedFunctionExpressions: true }],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": ["interface", "class", "enum"],
          "format": ["PascalCase"],
        },
        {
          "selector": ["variable"],
          "format": ["camelCase", "UPPER_CASE"],
        },
        {
          "selector": ["function", "classMethod"],
          "format": ["camelCase"],
        },
        {
          "selector": ["classProperty"],
          "format": ["camelCase"],
        },
        {
          "selector": ["enumMember"],
          "format": ["UPPER_CASE"],
        }
      ]
    },
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];