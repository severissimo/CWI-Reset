/// <reference types="cypress">
import token from '../../fixtures/token.json'

describe ('Teste API', () => {
    it ('Listar todas as categorias', () => {
        cy.request({
            method: 'GET',
            url: Cypress.config('baseUrl') + '/products/categories',
            headers: {
                Authorization: 'token.token'
            }

        })
    })

})