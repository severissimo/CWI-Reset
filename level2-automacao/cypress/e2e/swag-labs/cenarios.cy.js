/// <reference types="cypress" />


describe('Swag Labs', () => {

    beforeEach (() => {
        cy.acessarSwag()
    })

    it('Deve acessar o swaglabs com sucesso', () => {
        cy.url().should('include', 'saucedemo')
       })

    it('Deve tentar acessar sem Username', () => {
        cy.clicarLogin()
        cy.pegarErro().should('have.text','Epic sadface: Username is required')
        })

    it('Deve tentar login sem senha', () => {
        cy.pegarUsername().type('standard_user')
        cy.clicarLogin()
        cy.pegarErro().should('have.text','Epic sadface: Password is required')

    })

    it('Deve tentar login errado', () => {
        cy.pegarUsername().type('standard_user')
        cy.pegarSenha().type('uaheuah')
        cy.clicarLogin()
        cy.pegarErro().should('have.text','Epic sadface: Username and password do not match any user in this service')

    })
})
