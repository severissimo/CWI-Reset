/// <reference types="cypress">
import token from '../../fixtures/token.json'
import productCategoriesFixture from '../../fixtures/productCategoriesFixture.json'
import { faker } from '@faker-js/faker'
import productCategoriesSchema from '../../contratos/categories'


Cypress.Commands.add('getProductCategoriesWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/products/categories',            
        headers: { Authorization: token.token },
    })
}),

Cypress.Commands.add('getOneProductCategoryWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/products/categories/1',            
        headers: { Authorization: token.token },
    })
}),

Cypress.Commands.add('postProductCategoriesWooCommerce', (name, imgSrc) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/products/categories',            
        headers: { Authorization: token.token },
        body: {
            name: name,
            image: {
                src: imgSrc
            }            
        }
    })    
}),

Cypress.Commands.add('putProductCategoriesWooCommerce', () => {
    cy.request({
        method: 'PUT',
        url: Cypress.config('baseUrl') + '/products/categories',            
        headers: { Authorization: token.token },
        body: {

        }
    })
}),

Cypress.Commands.add('deleteProductCategoriesWooCommerce', (id) => {
    cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl') + '/products/categories/' + id + productCategoriesFixture.force,            
        headers: { Authorization: token.token },
        body: {

        }
    })
}),

Cypress.Commands.add('testIfPostProductCategoriesWooCommerce', (name, imgSrc) => {
    const categoryName = faker.commerce.department() + faker.commerce.department();
    const defaultImg = 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg'
    if(name == undefined && imgSrc == undefined){
        cy.request({
            method: 'POST',
            url: Cypress.config('baseUrl') + '/products/categories',            
            headers: { Authorization: token.token },
            body: {
                name: categoryName,
                image: {
                    src: productCategoriesFixture.src
                }
    
            }
        }).should((postCategoriesResponse) => {
            expect(postCategoriesResponse.status).to.be.eq(201)
            expect(postCategoriesResponse.body.name).to.be.eq(categoryName)
            expect(postCategoriesResponse.body.image.src).to.contains("https://cena.reset.cwi.com.br/wp-content/uploads/2022/11/T_2_front-")
        })
    } else {
        // Pelo visto esse post aceita inclusão mesmo sem imagem
        cy.request({
            method: 'POST',
            url: Cypress.config('baseUrl') + '/products/categories',            
            headers: { Authorization: token.token },
            body: {
                name: name,
                image: {
                    src: imgSrc
                }    
            }
        }).should((postCategoriesResponse) => {
            expect(postCategoriesResponse.status).to.be.eq(201)
            expect(postCategoriesResponse.body.name).to.be.eq(name)
            expect(postCategoriesResponse.body.image.src).equals(null)
        })
    }
    
})

