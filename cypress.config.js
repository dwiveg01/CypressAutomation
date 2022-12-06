const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default



module.exports = defineConfig({
  projectId: '3n72yy',

  defaultCommandTimeout:8000,
  pageLoadTimeout:30000,
  reporter: 'cypress-mochawesome-reporter',
 
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    
  },



  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);

      
    },
   
    specPattern: 'cypress/Integration/features/*.feature',
    baseUrl:'https://rahulshettyacademy.com/angularpractice/'
   
  },
});

//Dashboard url : npx cypress run --record --key da6d0e0f-fd25-487d-a8cf-7632e758905b