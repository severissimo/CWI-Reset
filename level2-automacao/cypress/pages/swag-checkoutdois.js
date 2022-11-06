export default class SwagCheckoutDois {
    btnFinish = '[data-test="finish"]'
    error = '[data-test="error"]'
    url = 'https://www.saucedemo.com/checkout-step-two.html'

    finalizarCompra() {
        cy.get(this.btnFinish).click()
    }

    verificarPagina(){
        cy.url().should('equals', this.url)
    }

    pegarErro(){        
        return cy.get(this.error)
    }

    
}