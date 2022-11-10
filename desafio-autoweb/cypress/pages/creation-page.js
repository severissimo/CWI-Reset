import { faker } from '@faker-js/faker'

export default class CreationPage {

    inputFirstName = '#firstname'
    inputLastName = '#lastname'
    inputEmail = '#email_address'
    inputPassword = '#password'
    inputPasswordConfirmation = '#password-confirmation'
    btnCreateAccount = '#form-validate > .actions-toolbar > div.primary > .action > span'
    password = 'AZ@Wdcfv'
        
    
    preencherDados() {
        cy.get(this.inputFirstName).type(faker.name.firstName())
        cy.get(this.inputLastName).type(faker.name.lastName())
        cy.get(this.inputEmail).type(faker.internet.email())
        cy.get(this.inputPassword).type(this.password)
        cy.get(this.inputPasswordConfirmation).type(this.password)

    }

    botaoCriarConta() {
        return cy.get(this.btnCreateAccount)
    }    
}