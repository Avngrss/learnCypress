/// <reference types="Cypress" />

describe('TC_001_SmokeTest', () => {
  it('Should load the home page', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.navbar-brand').should('be.visible')
    cy.get('#navbarExample').should('be.visible')
    cy.get('.list-group').should('be.visible')
    cy.get('a').contains('Phones')
    cy.get('h4').contains('PRODUCT STORE')
    cy.get('h4 > img').should('have.attr', 'src', 'bm.png')
  })
})