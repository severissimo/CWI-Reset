const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
      baseUrl: 'https://cena.reset.cwi.com.br/index.php/wp-json/wc/v3',
      specPattern: ['cypress/api/**/*.cy.js', 'cypress/api/**/*.feature'],
      env: {
        allureReuseAfterSpec: true
      },
      video: false
  }
});