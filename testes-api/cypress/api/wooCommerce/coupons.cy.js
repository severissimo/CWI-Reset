/// <reference types="cypress">
import couponsFixture from '../../fixtures/couponsFixture.json'
import statusFixture from '../../fixtures/statusFixture.json'

describe ('Coupons', () => {

    it.only('GET: Listar todos os Coupons - Aceitação', () => {
        cy.getAllCouponsWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.length).greaterThan(0)
        })
    })
    
    it('POST: Cadastrar um Coupom - Aceitação', () => {
        cy.postCouponsWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.created)
            //expect(response.body).to.be.eq(input)
        })
    })
    it('PUT: Editar um Coupom - Aceitação', () => {
        cy.putCouponsWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            //expect(response.body).to.be.eq(input)
        })
    })
    
    it('DELETE: Listar todos os Coupons', () => {
        cy.deleteCouponsWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            //expect(response.body).to.be.eq(input)
        })
    })
})