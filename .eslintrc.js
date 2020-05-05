module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
  ],
  settings: {
    'import/resolver': {
        node: {
            paths: ['src']
        }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'continue' },
        { blankLine: 'always', prev: '*', next: 'break' },
        { blankLine: 'always', prev: 'while', next: '*' },
        { blankLine: 'always', prev: '*', next: 'while' },
        { blankLine: 'always', prev: 'switch', next: '*' },
        { blankLine: 'always', prev: '*', next: 'switch' },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'always', prev: '*', next: 'if' }
    ],
  },
};
