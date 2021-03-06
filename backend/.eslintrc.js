module.exports = {
  env: {
    es2020: true,
    node: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'max-len': [
      'error',
      150,
    ],
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
    ],
    'import/extensions': 'off',
    'no-empty-function': 'off',
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'no-tabs': 'error',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
  overrides: [
    {
      files: [
        './src/main.ts',
        './src/components/app/app.module.ts',
      ],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
