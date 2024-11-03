/// <reference types="Cypress" />
describe('Cypress E2E testing demo', () => {
  beforeEach(() => {
    cy.visit('https://example.com/')
  })

  afterEach(() => {
    cy.log('Running each of my tests')
  })
  it('assert URL', () => {
    cy.url().should('contain', 'example.com')
  })

  it('asset title', () => {
    cy.title().should('contain', 'Example Domain')
  })

  // Bug: ticket Number 123
  it('assert element', () => {
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })

  it('reload and log', () => {
    cy.log('Before reload')
    cy.reload()
    cy.log('After relog')
  })
})