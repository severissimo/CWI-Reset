/// <reference types="cypress">
import token from '../../fixtures/token.json'
import { faker } from '@faker-js/faker'


Cypress.Commands.add('getProductCategoriesWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/products/categories',            
        headers: { Authorization: token.token },
    })
}),

Cypress.Commands.add('postProductCategoriesWooCommerce', (name, imgSrc) => {
    const categoryName = faker.commerce.department();
    const defaultImg = 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg'
    if(name == undefined && imgSrc == undefined){
        cy.request({
            method: 'POST',
            url: Cypress.config('baseUrl') + '/products/categories',            
            headers: { Authorization: token.token },
            body: {
                name: categoryName,
                image: {
                    src: defaultImg
                }
    
            }
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
        })
    }
    
})

