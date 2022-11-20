/// <reference types="cypress">

import productReviewFixture from '../../fixtures/productReviewFixture.json'
import token from '../../fixtures/token.json'
import statusFixture from '../../fixtures/statusFixture.json'
import productReviewSchema from '../../contratos/productReview.contract'
import deletedProductReviewSchema from '../../contratos/deletedProductReview.contract'
import { faker } from '@faker-js/faker'

describe('API - Product Reviews', () => {
 
  it('GET: Listar todos os Product Reviews - Aceitação', () => {
    cy.getAllProductReviewsWooCommerce(token.token)
      .should((response) => {
        expect(response.status).equals(statusFixture.ok)
        expect(response.body).exist
      })
  })
  
  it('GET: Listar todos os Product Reviews - Contrato', () => {
    cy.getAllProductReviewsWooCommerce(token.token)
      .should((response) => {
        expect(response.status).equals(statusFixture.ok)
        for (let i = 0; i < response.body.length; i++){
          cy.validarArrayResponse(productReviewSchema,response.body[i]);
      }
      })
  })

  it('POST: Criar um Product Review - Aceitação', () => {
    let newReview = faker.datatype.uuid()
    let newEmail = faker.internet.email('QA', 'Agil', 'test.dev')
    cy.postProductReviewsWooCommerce(
      token.token,
      productReviewFixture.product_id,
      newReview,
      productReviewFixture.reviewer,
      newEmail,
      productReviewFixture.rating
    ).should((response) => {
      expect(response.status).equals(statusFixture.created)
      expect(response.body.product_id).equals(productReviewFixture.product_id)
      expect(response.body.review).equals(newReview)
      expect(response.body.reviewer).equals(productReviewFixture.reviewer)
      expect(response.body.reviewer_email).equals(newEmail)
      expect(response.body.rating).equals(productReviewFixture.rating)
    }).then((response) => {
      cy.deleteProductReviewsWooCommerce(token.token, response.body.id)
    })
  })
  
  it('POST: Criar um Product Review - Contrato', () => {
    let newReview = faker.datatype.uuid()
    let newEmail = faker.internet.email('QA', 'Agil', 'test.dev')
    cy.postProductReviewsWooCommerce(
      token.token,
      productReviewFixture.product_id,
      newReview,
      productReviewFixture.reviewer,
      newEmail,
      productReviewFixture.rating
    ).should((response) => {
      expect(response.status).equals(statusFixture.created)
      return productReviewSchema.validateAsync(response.body)
    }).then((response) => {
      cy.deleteProductReviewsWooCommerce(token.token, response.body.id)
    })
  })

  it('PUT: Update um Product Review - Aceitação', () => {
    let newReview = faker.datatype.uuid()
    cy.postProductReviewsWooCommerce(
      token.token,
      productReviewFixture.product_id,
      newReview,
      productReviewFixture.reviewer,
      productReviewFixture.reviewer_email,
      productReviewFixture.rating
    ).then((response) => {
      cy.putProductReviewsWooCommerce(
        token.token,
        response.body.id,
        productReviewFixture.reviewEditado.review,
        productReviewFixture.reviewEditado.reviewer,
        productReviewFixture.reviewEditado.reviewer_email,
        productReviewFixture.reviewEditado.rating
      )
    }).should((response) => {
      expect(response.status).equals(statusFixture.ok)
      expect(response.body.product_id).equals(productReviewFixture.product_id)
      expect(response.body.review).equals(productReviewFixture.reviewEditado.review)
      expect(response.body.reviewer).equals(productReviewFixture.reviewEditado.reviewer)
      expect(response.body.reviewer_email).equals(productReviewFixture.reviewEditado.reviewer_email)
      expect(response.body.rating).equals(productReviewFixture.reviewEditado.rating)
    }).then((response) => {
      cy.deleteProductReviewsWooCommerce(token.token, response.body.id)
    })
  })

  it('PUT: Update um Product Review - Aceitação', () => {
    let newReview = faker.datatype.uuid()
    cy.postProductReviewsWooCommerce(
      token.token,
      productReviewFixture.product_id,
      newReview,
      productReviewFixture.reviewer,
      productReviewFixture.reviewer_email,
      productReviewFixture.rating
    ).then((response) => {
      cy.putProductReviewsWooCommerce(
        token.token,
        response.body.id,
        productReviewFixture.reviewEditado.review,
        productReviewFixture.reviewEditado.reviewer,
        productReviewFixture.reviewEditado.reviewer_email,
        productReviewFixture.reviewEditado.rating
      )
    }).should((response) => {
      expect(response.status).equals(statusFixture.ok)
      return productReviewSchema.validateAsync(response.body)
    }).then((response) => {
      cy.deleteProductReviewsWooCommerce(token.token, response.body.id)
    })
  })

  it('DELETE: Apagar um Product Review - Aceitação', () => {
    let newReview = faker.datatype.uuid()
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
  
  it('DELETE: Apagar um Product Review - Contrato', () => {
    let newReview = faker.datatype.uuid()
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
          return deletedProductReviewSchema.validateAsync(response.body)
        })
    })
  })
})