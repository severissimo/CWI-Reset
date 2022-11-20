/// <reference types="cypress">
import couponsFixture from '../../fixtures/couponsFixture.json'
import statusFixture from '../../fixtures/statusFixture.json'
import { faker } from '@faker-js/faker'

describe('Coupons', () => {
    const couponCode = faker.datatype.uuid()

    it('GET: Listar todos os Coupons - Aceitação', () => {
        cy.getAllCouponsWooCommerce()
            .should((response) => {
                expect(response.status).equals(statusFixture.ok)
                expect(response.body.length).greaterThan(0)
            })
    })

    it.only('POST: Cadastrar um Coupom - Aceitação', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        ).should((response) => {
            expect(response.status).equals(statusFixture.created)
            expect(response.body.code).to.be.eq(couponCode)
            expect(response.body.discount_type).to.be.eq(couponsFixture.discount_type)
            expect(response.body.amount).to.be.eq(couponsFixture.amount)
            expect(response.body.individual_use).to.be.eq(couponsFixture.individual_use)
            expect(response.body.exclude_sale_items).to.be.eq(couponsFixture.exclude_sale_items)
            expect(response.body.minimum_amount).to.be.eq(couponsFixture.minimum_amount)
        }).then((response) => {
            cy.deleteCouponsWooCommerce(response.body.id)
        })
    })
    
    it('PUT: Editar um Coupom - Aceitação', () => {
        cy.putCouponsWooCommerce()
            .should((response) => {
                expect(response.status).equals(statusFixture.ok)
                //expect(response.body).to.be.eq(input)
            })
    })

    it('DELETE: Listar todos os Coupons- Aceitação', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        ).then((response) => {
            cy.deleteCouponsWooCommerce(response.body.id)
                .should((response) => {
                    expect(response.status).equals(statusFixture.ok)
                    expect(response.body.code).to.be.eq(couponCode)
                    expect(response.body.discount_type).to.be.eq(couponsFixture.discount_type)
                    expect(response.body.amount).to.be.eq(couponsFixture.amount)
                    expect(response.body.individual_use).to.be.eq(couponsFixture.individual_use)
                    expect(response.body.exclude_sale_items).to.be.eq(couponsFixture.exclude_sale_items)
                    expect(response.body.minimum_amount).to.be.eq(couponsFixture.minimum_amount)
                })
        })
    })
})