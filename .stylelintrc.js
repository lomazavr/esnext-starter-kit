module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order",
    "stylelint-config-prettier-scss",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
  ],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
      rules: {
        "at-rule-no-unknown": null,
      },
    },
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "at-rule-no-unknown": null,
  },
};
