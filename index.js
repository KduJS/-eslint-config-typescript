module.exports = {
  plugins: ['@typescript-eslint'],
  // Prerequisite `eslint-plugin-kdu`, being extended, sets
  // root property `parser` to `'kdu-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/kdujs/eslint-plugin-kdu#what-is-the-use-the-latest-kdu-eslint-parser-error
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.kdu'],
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
    }
  }]
}
