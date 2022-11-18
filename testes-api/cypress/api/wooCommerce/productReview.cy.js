/// <reference types="cypress">
import { faker } from '@faker-js/faker'

import productReviewFixture from '../../fixtures/productReviewFixture.json'
import productReviewSchema from '../../contratos/productReviews.contract'

describe ('Product Reviews', ()=> {

    it('Lista todas as Product Reviews - Aceitação', () => {
        cy.getAllProductReviewsWooCommerce()
        .should((response) => {
            expect(response.status).equals(productReviewFixture.statusok)
            expect(response.body.length).greaterThan(0)
        })
    })

    it('Lista todas as Product Reviews - Contrato', () => {
        cy.getAllProductReviewsWooCommerce()
        .should((response) => {
            expect(response.status).equals(productReviewFixture.statusok)
            expect(response.body.length).greaterThan(0)
            for (let i = 0 ; i < response.body.length; i++){
                cy.getAllValidation(productReviewSchema,response.body[i]);
            }
        })
    })
    
    it('POST: Cadastra uma Product Review - Aceitação', () => {
        const newReview = faker.datatype.string()
        cy.postProductReviewWooCommerce(
            productReviewFixture.product_id,
            newReview,
            productReviewFixture.reviewer,
            productReviewFixture.reviewer_email,
            productReviewFixture.rating
            )
        .should((response) => {
            expect(response.status).equals(productReviewFixture.statusposted)
            expect(response.body.product_id).equals(productReviewFixture.product_id)
            expect(response.body.review).equals(newReview)
            expect(response.body.reviewer).equals(productReviewFixture.reviewer)
            expect(response.body.reviewer_email).equals(productReviewFixture.reviewer_email)
            expect(response.body.rating).equals(productReviewFixture.rating)
        })
    })
    
    it.only('POST: Cadastra uma Product Review - Contrato', () => {
        const newReview = faker.datatype.string()
        cy.postProductReviewWooCommerce(
            productReviewFixture.product_id,
            newReview,
            productReviewFixture.reviewer,
            productReviewFixture.reviewer_email,
            productReviewFixture.rating
            )
        .should((response) => {
            expect(response.status).equals(productReviewFixture.statusposted)
            return productReviewSchema.validateAsync(response.body)
        }).then((response) => {
            cy.deleteProductReviewsWooCommerce(response.body.id)
        })
    })
    
    it('PUT: Edita um Review', () => {
        const newReview = faker.datatype.string()
        cy.postProductReviewWooCommerce(
            productReviewFixture.product_id,
            newReview,
            productReviewFixture.reviewer,
            productReviewFixture.reviewer_email,
            productReviewFixture.rating
            )
        .should((response) => {
            cy.putProductReviewWooCommerce(
                response.body.id,
                productReviewFixture.reviewEditado.review
                )
            .should((response) => {
                expect(response.status).equals(productReviewFixture.statusok)
            })
        }).then((response) => {
            cy.deleteProductReviewsWooCommerce(response.body.id)
        })
    })
    
    it('passes', () => {
        cy.request('/')
    })


})