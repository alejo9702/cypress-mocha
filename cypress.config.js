const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    URL: 'http://automationpractice.com/index.php',
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 30000,
  viewportWidth: 1200,
  viewportHeight: 800,
  responseTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
