export class ProductPage {
    btnComprar = '.tbay-buy-now.button'

    comprarAgora() {
        cy.get(this.btnComprar).click()
    }
}
