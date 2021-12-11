module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended',
  ],
  plugins: ['node'],

  settings: {
    node: {
      tryExtensions: ['.ts', '.js', '.json', '.node'],
    },
  },

  rules: {
    'node/exports-style': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',

    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=14.0.0',
        ignores: ['modules'],
      },
    ],
  },
};
