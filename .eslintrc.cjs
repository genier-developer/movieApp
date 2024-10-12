module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  "parser": "@typescript-eslint/parser",
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

}
