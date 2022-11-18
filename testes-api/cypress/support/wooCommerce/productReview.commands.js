/// <reference types="cypress">

import productReviewFixture from '../../fixtures/productReviewFixture.json'

Cypress.Commands.add('getAllProductReviewsWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + productReviewFixture.url,            
        headers: { Authorization: productReviewFixture.token }
    })
})

Cypress.Commands.add('postProductReviewWooCommerce', (product_id, review, reviewer, reviewer_email, rating) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + productReviewFixture.url,            
        headers: { Authorization: productReviewFixture.token },
        body: {
            product_id: product_id,
            review: review,
            reviewer: reviewer,
            reviewer_email: reviewer_email,
            rating: rating
        }
    })
})

Cypress.Commands.add('deleteProductReviewsWooCommerce', (id) => {
    cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl') + productReviewFixture.url + id + productReviewFixture.force,            
        headers: { Authorization: productReviewFixture.token }
    })
})

Cypress.Commands.add('getAllValidation', (productReviewSchema, responsebody) => {
    return productReviewSchema.validateAsync(responsebody)
})