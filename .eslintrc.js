module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-native/no-inline-styles': 0,
        'prettier/prettier': [
          'error',
          {
            'no-inline-styles': false,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
