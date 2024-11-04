/// <reference types="Cypress" />

describe('Cypress files upload ', () => {
  it('Should upload file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('cypress/fixtures/image.jpg')
    cy.get('#file-submit').click()
    cy.get('h3').should('contain', 'File Uploaded').should('be.visible')
  })
})