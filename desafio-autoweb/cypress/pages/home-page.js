export default class HomePage {
    btnCreateAccount = '.panel > .header > :nth-child(3) > a'

    criarConta() {
        cy.get(this.btnCreateAccount).click()
    }

    visitar() {
        cy.visit('/')
    }

}