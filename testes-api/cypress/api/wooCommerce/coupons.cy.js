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

    it('POST: Cadastrar um Coupom - Aceitação', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        )
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

    it.only('DELETE: Listar todos os Coupons', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        ).should((response) => {
            expect(response.status).equals(statusFixture.created)
        }).then((response) => {
            cy.deleteCouponsWooCommerce(response.body.id)
                .should((response) => {
                    expect(response.status).equals(statusFixture.ok)
                    //expect(response.body).to.be.eq(input)
                })

        })


    })
})