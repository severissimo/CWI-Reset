/// <reference types="cypress"/>

describe('automation practice', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })

    it('displays two todo items by default', () => {
        cy.get('a[title="About us"]').click()  
        cy.get('h1.page-heading').should('have.text','About us')  
    })
})