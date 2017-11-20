module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  plugins: ['prettier'],
  extends: ['prettier', 'eslint:recommended'],
  rules: {
    'prettier/prettier': 'error'
  }
};
