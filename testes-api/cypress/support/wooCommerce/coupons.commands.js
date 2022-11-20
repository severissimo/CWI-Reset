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

Cypress.Commands.add('postCouponsWooCommerce', () => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/coupons',
        headers: { Authorization: token.token },
        body: {        }
    })
})

Cypress.Commands.add('putCouponsWooCommerce', () => {
    cy.request({
        method: 'PUT',
        url: Cypress.config('baseUrl') + '/coupons',
        headers: { Authorization: token.token },
        body: {        }
    })
})

Cypress.Commands.add('postCouponsWooCommerce', () => {
    cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl') + '/coupons',
        headers: { Authorization: token.token },
        body: {        }
    })
})