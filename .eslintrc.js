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
  plugins: ["prettier"],
  globals: {
    window: "readonly",
    document: "readonly",
  },
  ignorePatterns: ["dist", "node_modules"],
};
