module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react-native/no-inline-styles': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', '/^@/data/', '/^@//', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}
