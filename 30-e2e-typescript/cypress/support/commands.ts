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

import "cypress-plugin-snapshots/commands";
import "@testing-library/cypress/add-commands";
import "cypress-wait-until";

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
      dataMock: typeof dataMock;
    }
  }
}

function login(email = "user@site.com", pw = "LongPass123$") {
  cy.visit("/login/admin");
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(pw);
  cy.get('button[type="submit"]').click();
}

function dataMock() {
  cy.intercept("GET", "api/123", { fixture: "general/123.json" });
}

Cypress.Commands.add("login", login);
Cypress.Commands.add("dataMock", dataMock);

export {};
