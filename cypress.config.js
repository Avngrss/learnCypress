const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/results",
    "overwrite": true,
    "html": true,
    "reportFilename": "cypress-report"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://example.com/'
  },
});
