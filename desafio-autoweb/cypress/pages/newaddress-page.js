import { faker } from '@faker-js/faker'

export default class NewAddressPage {
    inputTelefone = '#telephone'
    inputEndereco = '#street_1'
    inputCidade = '#city'
    selectState = '#region_id'
    inputZip = '#zip'
    selectPais = '#country'
    btnSalvarEndereco = '#form-validate > .actions-toolbar > div.primary > .action > span'

    preencherDados() {
        cy.get(this.inputTelefone).type(faker.phone.number())
        cy.get(this.inputEndereco).type(faker.address.streetAddress())
        cy.get(this.inputCidade).type(faker.address.streetAddress())
        cy.get(this.selectState).select('1')
        cy.get(this.inputZip).type(faker.address.zipCode())        
    }

    botaoSalvarEndereco() {
        return cy.get(this.btnSalvarEndereco)
    }

}