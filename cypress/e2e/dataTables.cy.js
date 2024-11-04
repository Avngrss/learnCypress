/// <reference types="Cypress" />

describe('data Tables', () => {
  it('validate data in tables', () => {
    cy.visit('https://practice-automation.com/tables/')
    cy.get('.wp-block-table').within(() => {
      cy.get('td').eq(0).should('contain', 'Item')
      cy.get('tr').eq(1).should('contain', 'Oranges')
    })
  })
})