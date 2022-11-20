/// <reference types="cypress">

import productReviewFixture from '../../fixtures/productReviewFixture.json'
import token from '../../fixtures/token.json'
import statusFixture from '../../fixtures/statusFixture.json'
import shippingZoneSchema from '../../contratos/shippingZone.contract'
import { faker } from '@faker-js/faker'

describe('API - Product Reviews', () => {
  it.only('GET: Listar todos os Product Reviews - Aceitação', () => {
    cy.visit('https://example.cypress.io')    
  })
  
  it('POST: Criar um Product Review - Aceitação', () => {
    cy.visit('https://example.cypress.io')
  })
  
  it('PUT: Update um Product Review - Aceitação', () => {
    cy.visit('https://example.cypress.io')
  })
  
  it('DELETE: Apagar um Product Review - Aceitação', () => {
    cy.visit('https://example.cypress.io')
  })  
})