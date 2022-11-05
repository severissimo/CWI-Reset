export class SwagPage {
    url = 'https://www.saucedemo.com'
    btnLogin = '[data-test="login-button"]'
    usernameInput ='[data-test="username"]'
    senhaInput = '[data-test="password"]'
    error = '[data-test="error"]'

    acessar() {
        cy.visit(this.url)
    }

    clicarLogin(){
        cy.get(this.btnLogin).click()
    }

    pegarUsername(){
        cy.get(this.usernameInput)
    }

    pegarSenha(){
        cy.get(this.senhaInput)
    }

    pegarErro(){
        cy.get(this.error)
    }


}