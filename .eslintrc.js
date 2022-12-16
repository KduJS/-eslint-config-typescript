module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:kdu/essential',
    'eslint:recommended',
    require.resolve('./recommended')
  ],

  overrides: [{
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }]
}
