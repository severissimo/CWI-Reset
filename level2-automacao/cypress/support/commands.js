/// <reference types="cypress"/>
import { HomePage } from "../pages/home-page";
import { ProductPage } from "../pages/product-page";
import { SwagPage } from "../pages/swag-page";

const homePage = new HomePage()
const productPage = new ProductPage()
const swagPage = new SwagPage()

Cypress.Commands.add('gerarCarrinhoComUmProduto', () => {
    homePage.acessar()
    homePage.detalharPrimeiroProduto()
    productPage.comprarAgora()    
})

Cypress.Commands.add('acessarSwag', () => {
    swagPage.acessar()
})

Cypress.Commands.add('clicarLogin', () => {
    swagPage.clicarLogin()
})

Cypress.Commands.add('pegarUsername', () => {
    swagPage.pegarUsername()
})

Cypress.Commands.add('pegarSenha', () => {
    swagPage.pegarSenha()
})

Cypress.Commands.add('pegarErro', () => {
    swagPage.pegarErro()
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })