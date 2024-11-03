/// <reference types="Cypress" />

describe('Cypress Files', () => {
  it('Read/Write into JSON file', () => {
    cy.writeFile('test-data/data.json', { name: 'Peter', email: 'test@gmail.com' })

    cy.readFile('test-data/data.json').then((user) => {
      expect(user.name).to.equal('Peter')
      expect(user.email).to.equal('test@gmail.com')
    })  
  })

  it('Write into plain text file', () => {
    cy.writeFile('test-data/plain.txt', 'Hello World', 'ascii')
  })
})