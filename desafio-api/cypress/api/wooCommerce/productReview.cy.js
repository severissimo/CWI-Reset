/// <reference types="cypress">

import productReviewFixture from '../../fixtures/productReviewFixture.json'
import token from '../../fixtures/token.json'
import statusFixture from '../../fixtures/statusFixture.json'
import productReviewSchema from '../../contratos/productReview.contract'
import { faker } from '@faker-js/faker'
import { exist } from 'joi'

describe('API - Product Reviews', () => {
  const newReview = faker.datatype.uuid()

  it('GET: Listar todos os Product Reviews - Aceitação', () => {
    cy.getAllProductReviewsWooCommerce(token.token)
      .should((response) => {
        expect(response.status).equals(statusFixture.ok)
        expect(response.body).exist
      })
  })

  it('POST: Criar um Product Review - Aceitação', () => {
    cy.postProductReviewsWooCommerce(
      token.token,
      productReviewFixture.product_id,
      newReview,
      productReviewFixture.reviewer,
      productReviewFixture.reviewer_email,
      productReviewFixture.rating
    ).then((response) => {
      cy.deleteProductReviewsWooCommerce(token.token, response.body.id)
    })
  })

  it('PUT: Update um Product Review - Aceitação', () => {
    cy.visit('https://example.cypress.io')
  })

  it.only('DELETE: Apagar um Product Review - Aceitação', () => {
    cy.postProductReviewsWooCommerce(
      token.token,
      productReviewFixture.product_id,
      newReview,
      productReviewFixture.reviewer,
      productReviewFixture.reviewer_email,
      productReviewFixture.rating
    ).then((response) => {
        cy.deleteProductReviewsWooCommerce(token.token, response.body.id)
          .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.deleted).equals(productReviewFixture.deleted)
            expect(response.body.previous.product_id).equals(productReviewFixture.product_id)
            expect(response.body.previous.review).equals(newReview)
            expect(response.body.previous.reviewer).equals(productReviewFixture.reviewer)
            expect(response.body.previous.reviewer_email).equals(productReviewFixture.reviewer_email)
            expect(response.body.previous.rating).equals(productReviewFixture.rating)
          })
      })
  })
})