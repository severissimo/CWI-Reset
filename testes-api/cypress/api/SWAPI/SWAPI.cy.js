/// <reference types="cypress">
import token from '../../fixtures/token.json'

const SWAPI_URL = 'https://swapi.dev/api/'

describe ('Teste API', () => {
    it ('Listar todas as categorias', () => {
        cy.request({
            method: 'GET',
            //url: Cypress.config('baseUrl') + '/products/categories',
            url: `${SWAPI_URL}people/1`,
            headers: {
                //Authorization: 'token.token'
            }

        }).should((listarCategoriasResponse) => {
            expect(listarCategoriasResponse.status).to.be.eq(200)
            expect(listarCategoriasResponse.body).to.have.length.greaterThan(0)
        })
    })

})