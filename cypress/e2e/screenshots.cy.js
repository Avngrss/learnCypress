/// <reference types="Cypress" />

describe('Cyperss screenshots', () => {
  it('Screenshots', () => {
    cy.visit('https://example.com')
    cy.screenshot({overwrite: true})
  })

  it('single element screenshot', () => {
    cy.visit('https://example.com')
    cy.get('h1').screenshot({overwrite: true})

    cy.get('h1').should('have.length', 1)
  })
})