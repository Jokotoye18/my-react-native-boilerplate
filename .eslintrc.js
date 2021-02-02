/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  // extends: '@react-native-community',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ["prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  rules: {
    "no-unused-vars": ["warn"],
    "prettier/prettier": ["error", {singleQuote: false}],
    "react/jsx-filename-extension": [
      1,
      {extensions: [".js", ".jsx"]},
    ],
    "react/jsx-closing-bracket-location": [0, "tag-aligned"],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/react-in-jsx-scope": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": 0,
  },
};
