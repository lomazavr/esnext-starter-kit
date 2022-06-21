module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "prettier"],
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
    semi: 2,
    "no-debugger": "warn",
    "no-console": "warn",
  },
};
