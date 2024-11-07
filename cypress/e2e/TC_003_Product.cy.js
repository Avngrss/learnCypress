/// <reference types="Cypress" />

describe('TC_003_Product_Detail', () => {
  it('Should verifuy the product detail', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.hrefch').contains('Nexus 6').click()
    cy.get('.name').should('contain', 'Nexus 6')
    cy.get('.price-container').should('contain', '$650').should('be.visible')
    cy.get('.col-sm-12 > .btn').should('contain', 'Add to cart').click()
    cy.get('#cartur').click()
    cy.get('.success').within(() => {
      cy.get('td > img').eq(0).should('have.attr', 'src', 'imgs/Nexus_6.jpg')
      cy.get('td').eq(1).should('contain', 'Nexus 6')
      cy.get('td').eq(2).should('contain', '650')
    })
    cy.get('#totalp').should('contain', '650')
  })
})