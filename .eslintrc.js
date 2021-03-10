module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
};
