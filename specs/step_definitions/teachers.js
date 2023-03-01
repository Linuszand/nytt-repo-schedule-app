import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am logged in', () => {
  cy.visit('/login.html');
  cy.get('#email').type('exempel@school.net');
  cy.get('#password').type('abc123');
  cy.get('input[type="submit"][value="Login"]').click();
  cy.wait(1000); // Vänta på att sidan laddas
});

Given('That I am on the create page', () => {
  cy.visit('/admin/#/teachers/create');
});

When('I click on the email box and type {string}', (email) => {
  cy.get('#email').click().type(email);
});

When('I click on the password box and type {string}', (password) => {
  cy.get('#password').click().type(password);
});

When('I click on the first-name box and type {string}', (firstname) => {
  cy.get('#firstname').click().type(firstname);
});

When('I click on the last-name box and type {string}', (lastname) => {
  cy.get('#lastname').click().type(lastname);
});

When('I click on the initials box and type {string}', (initials) => {
  cy.get('#initials').click().type(initials);
});

When('I click on the phone box and type {string}', (number) => {
  cy.get('#phone').click().type(number);
});

When('I click on color and select a color', () => {
  cy.get('#color').click().invoke('val', '#914040');
});

When('I click on roles and select a role', () => {
  // Weird name for id for the roles button
  cy.get('#mui-component-select-roles').click();
  cy.contains('admin').click();
  cy.get('body').click();
});

When('Lastly click on the save button', () => {
  cy.get('button[aria-label="Save"]').click({ force: true });
  cy.wait(1000);
});

Then('I go to the teachers page', () => {
  cy.get('a[href="#/teachers"]').click();
  cy.wait(4000); // Vänta på att sidan laddas
  cy.visit('/admin/#/teachers?filter=%7B%7D&order=DESC&page=1&perPage=10&sort=id');
  cy.wait(2000); // Vänta på att den descendar listan med lärare
});

Then('I should have created a teacher', () => {
  cy.contains('Linus').should('be.visible');
});


