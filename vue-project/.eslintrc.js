module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
   //  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 0,
   //  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': 0,
	 "indent": [2, "tab"],
	 "no-tabs": 'on'
  }
}
