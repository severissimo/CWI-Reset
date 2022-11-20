/// <reference types="cypress">
import token from '../../fixtures/token.json'
import couponsFixture from '../../fixtures/couponsFixture.json'
import { faker } from '@faker-js/faker'

Cypress.Commands.add('getAllCouponsWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/coupons',
        headers: { Authorization: token.token }
    })
})

Cypress.Commands.add('postCouponsWooCommerce', (
    code,
    discount_type,
    amount,
    individual_use,
    exclude_sale_items,
    minimum_amount
) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/coupons',
        headers: { Authorization: token.token },
        body: {
            code: code,
            discount_type: discount_type,
            amount: amount,
            individual_use: individual_use,
            exclude_sale_items: exclude_sale_items,
            minimum_amount
        }
    })
})

Cypress.Commands.add('putCouponsWooCommerce', (id, amount) => {
    cy.request({
        method: 'PUT',
        url: Cypress.config('baseUrl') + '/coupons/' + id,
        headers: { Authorization: token.token },
        body: {
            amount: amount
        }
    })
})

Cypress.Commands.add('deleteCouponsWooCommerce', (id) => {
    cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl') + '/coupons/' + id + couponsFixture.force,
        headers: { Authorization: token.token },
        body: {}
    })
})