export default class SwagCart {
    btnCheckout = '[data-test="checkout"]'

    checkout() {
        cy.get(this.btnCheckout).click()
    }
}