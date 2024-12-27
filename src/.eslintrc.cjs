module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "prettier"
    ],
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "no-undef": "off",
        },
      },
    ],
  };
  