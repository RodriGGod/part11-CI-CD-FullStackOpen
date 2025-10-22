/* eslint-env node */
// eslint-disable-next-line no-console
module.exports = {
  env: { browser: true, node: true, es2021: true, jest: true },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  settings: { react: { version: 'detect' } },
  rules: {
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off', // React 17+ no requiere import React
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
  globals: {
    process: 'readonly' // si en el frontend hay process.env, evita no-undef
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.cjs', 'webpack.config.js', 'jest.config.js', '.eslintrc.js'],
      env: { node: true }
    },
    {
      files: ['**/*.test.*', '**/__tests__/**'],
      env: { jest: true }
    }
  ]
};
