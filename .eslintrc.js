

module.exports = {
  env: { browser: true, node: true, es2021: true, jest: true },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  rules: {
    quotes: ['error', 'single'],                 
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.cjs', 'webpack.config.js', 'jest.config.js', '.eslintrc.js'],
      env: { node: true }                        
    }
  ]
};
