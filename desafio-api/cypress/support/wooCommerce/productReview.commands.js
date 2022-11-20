/// <reference types="cypress">

import productReviewFixture from '../../fixtures/productReviewFixture.json'

Cypress.Commands.add('getAllProductReviewsWooCommerce', (token) => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + productReviewFixture.url,
        headers: { Authorization: token }
    })
})

Cypress.Commands.add('postProductReviewsWooCommerce', (
    token,
    product_id,
    review,
    reviewer,
    reviewer_email,
    rating
) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + productReviewFixture.url,
        headers: { Authorization: token },
        body: {
            product_id: product_id,
            review: review,
            reviewer: reviewer,
            reviewer_email: reviewer_email,
            rating: rating
        }
    })
})

Cypress.Commands.add('putProductReviewsWooCommerce', (
    token,
    id,
    review,
    reviewer,
    reviewer_email,
    rating
    ) => {
    cy.request({
        method: 'PUT',
        url: Cypress.config('baseUrl') + productReviewFixture.url + id,
        headers: { Authorization: token },
        body: {
            review: review,
            reviewer: reviewer,
            reviewer_email: reviewer_email,
            rating: rating
        }
    })
})

Cypress.Commands.add('deleteProductReviewsWooCommerce', (token, id) => {
    cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl') + productReviewFixture.url + id + productReviewFixture.force,
        headers: { Authorization: token }
    })
})