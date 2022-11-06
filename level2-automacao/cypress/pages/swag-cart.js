export default class SwagCart {
    btnCheckout = '[data-test="checkout"]'
    btnProdutos = '[data-test="back-to-products"]'
    btnRemoverJaqueta = '[data-test="remove-sauce-labs-fleece-jacket"]'

    checkout() {
        cy.get(this.btnCheckout).click()
    }

    voltarParaProdutos(){
        cy.get(this.btnProdutos).click()
    }

    verificarCarrinhoVazio(){
        cy.get('.cart_item').should('have.length', '0')
    }

    verificarCarrinhoUmItem(){
        cy.get('.cart_item').should('have.length', '1')
    }
    
    verificarCarrinhoDoisItem(){
        cy.get('.cart_item').should('have.length', '2')
    }

    removerJaqueta(){
        cy.get(this.btnRemoverJaqueta).click()
    }
}