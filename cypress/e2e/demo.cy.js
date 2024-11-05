/// <reference types="Cypress" />
import ExamplePage from "../pages/page"


describe('Cypress E2E testing demo', () => {
  beforeEach(() => {
    // cy.visit('https://example.com/')
    const examplePage = new ExamplePage()
    examplePage.openExamplePage()
  })

  afterEach(() => {
    cy.log('Running each of my tests')
  })
  it('assert URL and Title', () => {
    // cy.url().should('contain', 'example.com')
    const examplePage = new ExamplePage()
    examplePage.assertURL()
    examplePage.assertTitle()
  })

  // it('asset title', () => {
  //   // cy.title().should('contain', 'Example Domain')
  //   const examplePage = new ExamplePage()
  //   examplePage.assertTitle()
  // })

  // Bug: ticket Number 123
  it.only('assert element', {retries: 3} , () => {
    cy.get('h1').should('not.be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })

  it('reload and log', () => {
    cy.log('Before reload')
    cy.reload()
    cy.log('After relog')
  })
})