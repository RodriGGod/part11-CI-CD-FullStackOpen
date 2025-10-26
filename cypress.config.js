const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5000',
    specPattern: 'e2e-tests/**/*.cy.js',
    supportFile: false
  },
  video: false
});
