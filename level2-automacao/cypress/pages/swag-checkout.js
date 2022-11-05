export default class SwagCheckout {
    btnFinish = '[data-test="finish"]'

    finalizarCompra() {
        cy.get(this.btnFinish).click()
    }
}