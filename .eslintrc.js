module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['react-native', '@typescript-eslint', 'react', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': ['warn', {'newlines-between': 'always'}],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {ignoreRestSiblings: true},
        ],
        'react-native/no-unused-styles': 1,
        'react-native/no-color-literals': 1,
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
