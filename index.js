module.exports = {
  plugins: ['@typescript-eslint'],

  // Prerequisite `eslint-plugin-kdu`, being extended, sets
  // root property `parser` to `'kdu-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`
  parserOptions: {
    parser: {
      'js': 'espree',
      'jsx': 'espree',

      'ts': require.resolve('@typescript-eslint/parser'),
      'tsx': require.resolve('@typescript-eslint/parser'),

      // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    },
    extraFileExtensions: ['.kdu'],
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:@typescript-eslint/eslint-recommended'
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
      }
    }
  ]
}
