module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort", "prettier"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "prettier/prettier": "warn",
    "no-debugger": "warn",
    "no-console": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
};
