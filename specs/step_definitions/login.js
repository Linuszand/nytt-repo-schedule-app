import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test if there is an uncaught exception
  return false
})

Given('that I am on the login page', () => {
  cy.visit('/login.html');
});

When('I click on email box and type {string}', (email) => {
  cy.get('#email').click().type(email);
});

When('I click on password box and type {string}', (password) => {
  cy.get('#password').click().type(password);
});

When('I click on login button', () => {
  cy.get('input[type="submit"][value="Login"]').click();
});

When('I am on home page', () => {
  cy.wait(1000)
});

Then('I click on Logout button', () => {
  cy.contains('Logout').click();
});

Then('I am on login page', () => {
  cy.wait(1000);
});





