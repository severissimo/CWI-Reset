/// <reference types="cypress">
import productCategoriesSchema from '../../contratos/categories'
import { faker } from '@faker-js/faker'


describe ('Product Categories', () => {
    it ('Listar todas as categorias - Aceitação', () => {
        //Transformar CyRequest em commando
        cy.getProductCategoriesWooCommerce().should((listarCategoriasResponse) => {
            expect(listarCategoriasResponse.status).to.be.eq(200)
            expect(listarCategoriasResponse.body).to.have.length.greaterThan(0)
        })
    })

    it('Lista todas as categorias - Contrato', () => {
        cy.getProductCategoriesWooCommerce().should((listarCategoriasResponse) => {
            productCategoriesSchema.validateAsync(listarCategoriasResponse.body)
        })
    })

    it.only('Cadastro de categorias - Aceitação', () => {
        cy.postProductCategoriesWooCommerce().should((postCategoriesResponse) => {
            expect(postCategoriesResponse.status).to.be.eq(201)
        })

    })

})