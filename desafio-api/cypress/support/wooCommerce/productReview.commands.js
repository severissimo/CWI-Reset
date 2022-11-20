/// <reference types="cypress">

import productReviewFixture from '../../fixtures/productReviewFixture.json'

Cypress.Commands.add('getAllProductReviewsWooCommerce', (token) => {
    cy.request({
        method: '',
        url: Cypress.config('baseUrl') + productReviewFixture.url,            
        headers: { Authorization: token }
    })
})

Cypress.Commands.add('postProductReviewsWooCommerce', (token) => {
    cy.request({
        method: '',
        url: Cypress.config('baseUrl') + productReviewFixture.url,            
        headers: { Authorization: token },
        body: {}
    })
})

Cypress.Commands.add('putProductReviewsWooCommerce', (token) => {
    cy.request({
        method: '',
        url: Cypress.config('baseUrl') + productReviewFixture.url,            
        headers: { Authorization: token },
        body: {}
    })
})

Cypress.Commands.add('deleteProductReviewsWooCommerce', (token) => {
    cy.request({
        method: '',
        url: Cypress.config('baseUrl') + productReviewFixture.url,            
        headers: { Authorization: token }
    })
})