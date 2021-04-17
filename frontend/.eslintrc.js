module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    browser: true
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin,
    'airbnb-base',
  ],
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    '@typescript-eslint/no-empty-function': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 'off',
    'func-names': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-debugger': 'off',
    'no-var': 'error',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    skipBlankLines: 'off',
    'no-multiple-empty-lines': 'error',
    'newline-after-var': ['error', 'always'],
    'no-shadow': 'off',
    'lines-between-class-members': ['error', 'always'],
    'no-empty-function': 'error',
    'no-tabs': 'error',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'max-len': ['error', {
      code: 150,
    }],
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
