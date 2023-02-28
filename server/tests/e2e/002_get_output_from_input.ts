import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('user is on the home screen', () => {
  cy.visit('/');  
})

When('user enters some input', () => {
  cy.get('#input').type("5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL")      
})

When('user clicks send', () => {
  cy.get('#send').click();
})

Then('then output should show', () => {
  cy.get('#output').invoke("val").should("equal", "1 1 E\n3 3 N LOST\n2 3 S");
})
