module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    // You can override any rules you want
    'import/prefer-default-export': 'off',
  },
};
