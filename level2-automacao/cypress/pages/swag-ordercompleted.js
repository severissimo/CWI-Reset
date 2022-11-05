export default class SwagOrderCompleted {
    title ='.title'
   url = 'https://www.saucedemo.com/checkout-complete.html'

    pedidoFeito(){
    cy.get(this.title).should('have.text', 'Checkout: Complete!')
    cy.url().should('contains','checkout-complete.html')
    }
}