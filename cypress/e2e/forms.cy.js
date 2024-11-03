/// <reference types="Cypress" />

describe('Forms, buttons & checkbox', () => {
  it('Submit and Assert form', () => {
    //Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    //Fill the form
    // cy.get('[data-cy="name-input"]').type('Peter', { delay: 100 })
    cy.getByTestData('name-input').type('Peter', { delay: 100 })
    cy.get('[data-cy="drink1"]').check()
    cy.get('[data-cy="color1"]').check()
    cy.get('#automation').select('Yes').should('have.value', 'yes')
    // cy.get('#email').type('example@gmail.com', { delay: 100 })
    cy.getByID('email').type('example@gmail.com', { delay: 100 })
    cy.get('[data-cy="message"]').type('Hello cypress', { delay: 100 })
    // cy.get('[data-cy="submit-btn"]').click()
    //Assert form details
    // cy.on('window:alert',(msgtext) => {
    //   expect(msgtext).to.equal('Message received!');
    // })
  })
})