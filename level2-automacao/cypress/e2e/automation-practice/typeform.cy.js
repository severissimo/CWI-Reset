/// <reference types="cypress"/>
const API_URL = 'https://api.typeform.com/'

// Por motivos de segurança o ACCESS_TOKEN não está sendo mostrado, basta criar uma conta para pegar o seu.
const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`

it('pega meus dados', () => {    

    cy.request({
        method: 'GET',
        url: `${API_URL}me`,
        headers: { authorization }
    }).should(({status, body}) => {
        const { alias, email, language } = body

        expect(status).to.eq(200)
        expect(alias).to.eq('Carlos Severo')
        expect(email).to.eq('cmsdof@gmail.com')
        expect(language).to.eq('en')
    })
})