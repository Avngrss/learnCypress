/// <reference types="Cypress" />

describe('Cypress cleaning inputs', () => {
  it('Type and Clear', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('[data-cy="name-input"]').type('12345')
    cy.wait(2000)
    cy.get('[data-cy="name-input"]').clear().type('new text')
  })
})