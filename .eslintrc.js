/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    window: "readonly",
    document: "readonly",
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
  ignorePatterns: ["dist", "node_modules"],
};
