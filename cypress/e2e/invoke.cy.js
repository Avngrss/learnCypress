/// <reference types="Cypress" />

describe('Exsicute JS inside Cypress', () => {
  it('Invoke calculation of numbers', () => {
    const fn = (a,b,c) => {
      return a + b + c
    }

    cy.wrap({sum: fn}).invoke('sum', 2,2,10).should('be.greaterThan', 10).and('be.lessThan', 20)
  })
})