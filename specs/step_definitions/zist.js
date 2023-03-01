import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('I shut down the test server', (str) => {
  cy.request('http://localhost:7655/done')
});