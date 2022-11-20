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