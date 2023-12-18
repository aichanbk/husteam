// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getBySel", (selector) => {
  return cy.get(`[data-test-id="${selector}"]`);
});

Cypress.Commands.add("login", (remembered) => {
  cy.get("input[name=email]").type("captainnemot1k60@gmail.com");
  cy.get("input[name=password]").type("makepassword");
  if (!remembered) {
    cy.get("input[name=remember").click();
    cy.get("button[type=submit]").click();
  } else {
    cy.get("button[type=submit]").click();
  }
});
