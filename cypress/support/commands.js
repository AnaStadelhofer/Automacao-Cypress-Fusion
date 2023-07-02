// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("CreateItem", () => {
  cy.iframe("#onlyCol").within(() => {
    cy.get("#createitem").click();
  });
});

Cypress.Commands.add("CreateGroup", (code, name) => {
  cy.iframe("iframe:eq(0)").within(() => {
    cy.get("#var_code__").type(code);
    cy.get("#var_name__").type(name);
    cy.get('input[name="action.apply"]').click();
    cy.get("#cancelButtonModal").click();
    // cy.get('.modal_closebtn').click();
  });
});
