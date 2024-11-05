/// <reference types="Cypress" />
describe('Cypress Modal', () => {
  it('Open & Assert modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').click(); // Выбор первого элемента, если их несколько
    cy.get('#popmake-1318').should('be.visible').contains('Hi, I’m a simple modal.');
    cy.get("div[id='popmake-1318'] button[aria-label='Close']").first().click(); // Выбор первого элемента, если их несколько
    cy.get('#popmake-1318').should('not.be.visible')
  });
});