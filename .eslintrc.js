module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020, 
    sourceType: "module", 
    ecmaFeatures: {
      jsx: true 
    }
  },
  settings: {
    react: {
      version: "detect" 
    }
  },
  extends: [
    "plugin:react/recommended", 
    "plugin:@typescript-eslint/recommended", 
    "prettier/@typescript-eslint", 
    "plugin:prettier/recommended" 
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-submodule-imports": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/jsx-no-lambda": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "simple-import-sort/sort": "warn",
    "no-console": "off",
    "sort-keys": "off",
    "sort-imports": "off"
  },
};