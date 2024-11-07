/// <reference types="Cypress" />

describe('TC_002_Login', () => {
  it('Should login and logout from the application', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('.modal-dialog').should('be.visible')
    cy.get('#logInModalLabel').contains('Log in')
    cy.get('#loginusername').type('test', {force: true})
    cy.get('#loginpassword').type('test', {force: true})
    cy.get('.btn-primary').contains('Log in').click()
    cy.get('#nameofuser').should('contain', 'Welcome test')
    cy.get('#logout2').click()
    cy.get('#login2').should('contain', 'Log in')
  })
})