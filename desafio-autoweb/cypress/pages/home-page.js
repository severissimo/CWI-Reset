export default class HomePage {
    btnCreateAccount = '.panel > .header > :nth-child(3) > a'
    boxEndereco = '.box-billing-address > .box-content > address'

    criarConta() {
        cy.get(this.btnCreateAccount).click()
    }

    visitar() {
        cy.visit('/')
    }

    verificarEndereco() {
        return cy.get(this.boxEndereco)
    }

}