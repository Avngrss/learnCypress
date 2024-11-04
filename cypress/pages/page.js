class ExamplePage {
    openExamplePage() {
        cy.visit('/')
    }
    assertURL() {
        const baseURL = Cypress.config('baseUrl')
        cy.url().should('contain', `${baseURL}`)
    }
    assertTitle() {
        cy.title().should('contain', 'Example Domain')
    }
}

export default ExamplePage;