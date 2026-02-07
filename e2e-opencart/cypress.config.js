const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://opencart.abstracta.us/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
