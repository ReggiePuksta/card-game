module.exports = {
  env: { node: true, commonjs: true, jest: true, browser: true, es6: true },
  plugins: ["prettier", "promise"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
  ],
  rules: {
    // Don't check LF or CRLF. Git converts automatically set in .gitattributes.
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "promise/always-return": "off",
  },
};
