/// <reference types="cypress" />
import SwagPage from "../../pages/swag-page";
const swagPage = new SwagPage()



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
        cy.pegarSenha().should('have.text','')
        cy.pegarErro().should('have.text','Epic sadface: Password is required')
    })

    it('Deve tentar login sem sucesso', () => {
        cy.pegarUsername().type('standard_user')
        cy.pegarSenha().type('uaheuah')
        cy.clicarLogin()
        cy.pegarErro().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Deve fazer login com Standard User', () => {
        cy.loginStandardUser()
        cy.url().should('include', 'saucedemo.com/inventory.html')
        cy.get('.title').should('have.text', 'Products')
        //cy.pegarErro().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
    
    it('Deve fazer login com Problem User', () => {
        cy.loginProblemUser()
        //cy.url().should('include', 'saucedemo.com/inventory')
        //cy.get('.title').should('have.text', 'Products')
        //cy.pegarErro().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
    
    it('Deve fazer login com LockedOut User', () => {
        cy.loginLockedOutUser()
        cy.pegarErro().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Deve fazer login com PerformanceGlitch User', () => {
        cy.loginPerformanceGlitchUser()
        //cy.pegarErro().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Deve adicionar Jaqueta ao carrinho', () => {
        cy.loginStandardUser()
        cy.get('#item_5_title_link > .inventory_item_name').should('have.text','Sauce Labs Fleece Jacket')
        cy.get('#item_5_title_link > .inventory_item_name').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        //cy.get('[data-test="back-to-products"]').click()
        //cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('have.length', '1')
        cy.get('#item_5_title_link > .inventory_item_name').should('have.text','Sauce Labs Fleece Jacket')

    })
    
    it('Deve adicionar 2 itens ao carrinho', () => {
        cy.loginStandardUser()
        cy.get('#item_5_title_link > .inventory_item_name').should('have.text','Sauce Labs Fleece Jacket')
        cy.get('#item_5_title_link > .inventory_item_name').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('have.length', '2')
        cy.get('#item_5_title_link > .inventory_item_name').should('have.text','Sauce Labs Fleece Jacket')

    })
})
