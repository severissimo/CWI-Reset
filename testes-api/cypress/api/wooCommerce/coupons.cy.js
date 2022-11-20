/// <reference types="cypress">
import couponsFixture from '../../fixtures/couponsFixture.json'
import couponsSchema from '../../contratos/coupons.contract'
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

    it('GET: Listar todos os Coupons - Contrato', () => {
        cy.getAllCouponsWooCommerce()
            .should((response) => {
                expect(response.status).equals(statusFixture.ok)
                for (let i = 0; i < response.body.length; i++){
                    cy.validarArrayResponse(couponsSchema,response.body[i]);
                }
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
    
    it('POST: Cadastrar um Coupom - Contrato', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        ).should((response) => {
            expect(response.status).equals(statusFixture.created)
            return couponsSchema.validateAsync(response.body)
        }).then((response) => {
            cy.deleteCouponsWooCommerce(response.body.id)
        })
    })

    it('PUT: Editar um Coupom - Aceitação', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        ).then((response) => {
            cy.putCouponsWooCommerce(response.body.id, couponsFixture.updatedAmount)
                .should((response) => {
                    expect(response.status).equals(statusFixture.ok)
                    expect(response.body.code).to.be.eq(couponCode)
                    expect(response.body.discount_type).to.be.eq(couponsFixture.discount_type)
                    expect(response.body.amount).to.be.eq(couponsFixture.updatedAmount)
                    expect(response.body.individual_use).to.be.eq(couponsFixture.individual_use)
                    expect(response.body.exclude_sale_items).to.be.eq(couponsFixture.exclude_sale_items)
                    expect(response.body.minimum_amount).to.be.eq(couponsFixture.minimum_amount)
                })
        }).then((response) => {
            cy.deleteCouponsWooCommerce(response.body.id)
        })
    })
    
    it('PUT: Editar um Coupom - Contrato', () => {
        cy.postCouponsWooCommerce(
            couponCode,
            couponsFixture.discount_type,
            couponsFixture.amount,
            couponsFixture.individual_use,
            couponsFixture.exclude_sale_items,
            couponsFixture.minimum_amount
        ).then((response) => {
            cy.putCouponsWooCommerce(response.body.id, couponsFixture.updatedAmount)
                .should((response) => {
                    expect(response.status).equals(statusFixture.ok)
                    return couponsSchema.validateAsync(response.body)
                })
        }).then((response) => {
            cy.deleteCouponsWooCommerce(response.body.id)
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
    
    it.only('DELETE: Listar todos os Coupons- Contrato', () => {
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
                    return couponsSchema.validateAsync(response.body)
                })
        })
    })
})