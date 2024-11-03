/// <reference types="Cypress" />


describe('Cypress hover', () => {
  it('Test hover worground', () => {
    // cy.viewport(800, 600) //Если viewport очень маленький и элемент не может быть найден то тест зафейлится
    cy.viewport('macbook-15')
    cy.visit('https://practice-automation.com/hover/')
    cy.get('h3#mouse_over').trigger('mouseover')
    cy.get('h3#mouse_over').should('contain', 'You did it!')
  })
})