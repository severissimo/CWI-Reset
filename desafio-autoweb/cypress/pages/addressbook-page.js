export default class AddressBookPage {

    btnMyAccount = '.items > :nth-child(1) > a'

    botaoMyAccount() {
        return cy.get(this.btnMyAccount)
    }

}