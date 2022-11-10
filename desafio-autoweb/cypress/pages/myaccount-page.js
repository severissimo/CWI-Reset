export default class MyAccountPage {

    btnEditarEndereco = '.box-billing-address > .box-actions > .action > span'

    botaoEditarEndereco() {
        return cy.get(this.btnEditarEndereco)
    }
}