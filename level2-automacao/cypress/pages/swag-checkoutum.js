export default class SwagCheckoutUm {
    error = '[data-test="error"]'
    url = 'https://www.saucedemo.com/checkout-step-one.html'
    firstName ='[data-test="firstName"]'
    lastName = '[data-test="lastName"]'
    postalCode = '[data-test="postalCode"]'
    btnContinue = '[data-test="continue"]'
    msgErrorFirstName = 'Error: First Name is required'
    msgErrorLastName = 'Error: Last Name is required'
    msgErrorZip = 'Error: Postal Code is required'


    adicionarInfos(firstName, lastName, zip){
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.postalCode).type(zip)
        cy.get(this.btnContinue).click()
    }

    verificarPagina(){
        cy.url().should('equals', this.url)
    }

    pegarErro(){        
        return cy.get(this.error)
    }

}