/// <reference types="cypress"/>

describe ('Cena Store', () => {

    it('Gera carrinho com 1 produto', () => {
        cy.gerarCarrinhoComUmProduto()
    })
})