/// <reference types="cypress">
import couponsFixture from '../../fixtures/couponsFixture.json'
import statusFixture from '../../fixtures/statusFixture.json'

describe ('Coupons', () => {

    it('GET: Listar todos os Coupons', () => {
        cy.getAllCouponsWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.length).greaterThan(0)
        })
    })
})