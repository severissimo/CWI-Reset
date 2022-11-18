/// <reference types="cypress">
import productCategoriesSchema from '../../contratos/categories'
import categoryObject from '../../fixtures/categoryObject.json'
import { faker } from '@faker-js/faker'


describe ('Product Categories', () => {
    it.only('GET - Listar todas as categorias - Aceitação', () => {
        cy.getProductCategoriesWooCommerce().should((listarCategoriasResponse) => {
            expect(listarCategoriasResponse.status).to.be.eq(200)
            expect(listarCategoriasResponse.body).to.have.length.greaterThan(0)
        })
    })

    it('GET - Lista todas as categorias - Contrato', () => {        
        cy.getProductCategoriesWooCommerce().should((listarCategoriasResponse) => {
            for(let i = 0; i < listarCategoriasResponse.body.length; i++){
                console.log(i)
                productCategoriesSchema.validateAsync(listarCategoriasResponse.body[i])
            }            
        })
    })

    it('POST - Cadastro de categorias - Aceitação', () => {
        cy.postProductCategoriesWooCommerce().should((listarCategoriasResponse) => {
            expect(listarCategoriasResponse.status).to.be.eq(201)
            //expect(listarCategoriasResponse.body).to.have.length.greaterThan(0)
        })

    })

    it('POST - Cadastro de categorias - Contrato', () => {
        const categoryName = faker.commerce.department() + faker.commerce.department();
        cy.postProductCategoriesWooCommerce(categoryName,categoryObject.src)
        .should((postCategoriesResponse) => {
            return productCategoriesSchema.validateAsync(postCategoriesResponse.body)
        }).should((postCategoriesResponse) => {
            expect(postCategoriesResponse.status).to.be.eq(201)
            expect(postCategoriesResponse.body.name).to.be.eq(categoryName)
            expect(postCategoriesResponse.body.image.src).to.contains("https://cena.reset.cwi.com.br/wp-content/uploads/2022/11/T_2_front-")
        })
    })

    it('PUT - Edição de categorias - Aceitação', () => {
        cy.request('/')
    })
    
    it('DELETE - Edição de categorias - Aceitação', () => {
        cy.deleteProductCategoriesWooCommerce(5)
    }) // O teste acima não passa, dá 404 - "Nenhuma rota foi encontrada que corresponde com o URL e o método de requisição.",

    it('GET - Listar uma categoria - Aceitação', () => {
        cy.getOneProductCategoryWooCommerce().should((listarCategoriasResponse) => {
            expect(listarCategoriasResponse.status).to.be.eq(200)
            expect(listarCategoriasResponse.body).to.have.length.greaterThan(0)
        })
    }) // O teste acima não passa, dá 404 - "Recurso Inexistente"


})  