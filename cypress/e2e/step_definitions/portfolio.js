const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que acesso o site', () => {
  cy.visit('/');
});

Then('o título da página deve conter {string}', (title) => {
  cy.title().should('include', title);
});

Then('deve exibir as tecnologias {string} e {string}', (tech1, tech2) => {
  cy.contains(tech1).should('be.visible');
  cy.contains(tech2).should('be.visible');
});

Then('o e-mail {string} deve estar visível', (email) => {
  cy.contains(email).should('be.visible');
});
