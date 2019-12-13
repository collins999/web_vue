module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['vue'],
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
  }
}