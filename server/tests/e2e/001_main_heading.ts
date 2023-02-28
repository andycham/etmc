import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is on the home screen', () => {
  cy.visit('/');  
})

Then('the main heading should show', () => {
  cy.get('.App').should("contain", 'ETMC');
})
