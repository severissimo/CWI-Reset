/// <reference types="cypress">
import token from '../../fixtures/token.json'

Cypress.Commands.add('getProductCategoriesWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/products/categories',            
        headers: { Authorization: token.token },
    })
})

Cypress.Commands.add('postProductCategoriesWooCommerce', () => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/products/categories',            
        headers: { Authorization: token.token },
    })
})