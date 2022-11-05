export default class SwagInfoPage {
    firstName ='[data-test="firstName"]'
    lastName = '[data-test="lastName"]'
    postalCode = '[data-test="postalCode"]'
    btnContinue = '[data-test="continue"]'

    adicionarInfos(){
        cy.get(this.firstName).type('Teste')
        cy.get(this.lastName).type('Teste')
        cy.get(this.postalCode).type('Teste')
        cy.get(this.btnContinue).click()
    }
}