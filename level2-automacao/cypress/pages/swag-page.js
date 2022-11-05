export default class SwagPage {
    url = 'https://www.saucedemo.com'
    btnLogin = '[data-test="login-button"]'
    usernameInput ='[data-test="username"]'
    senhaInput = '[data-test="password"]'
    error = '[data-test="error"]'
    senha = 'secret_sauce'

    acessar() {
        cy.visit(this.url)
    }

    loginStandardUser(username, password){
        cy.pegarUsername().type(username)
        cy.pegarSenha().type(password)
        cy.clicarLogin()
    }
    
    
    loginProblemUser(username, password){
        cy.pegarUsername().type(username)
        cy.pegarSenha().type(password)
        cy.clicarLogin()
    }
    
    loginLockedOutUser(){
        cy.pegarUsername().type('locked_out_user')
        cy.pegarSenha().type(this.senha)
        cy.clicarLogin()
    }
    
    loginPerformanceGlitchUser(){
        cy.pegarUsername().type('performance_glitch_user')
        cy.pegarSenha().type(this.senha)
        cy.clicarLogin()
    }

    clicarLogin(){
        cy.get(this.btnLogin).click()
    }

    pegarUsername(){
        cy.get(this.usernameInput)
        return this
    }

    pegarSenha(){
        cy.get(this.senhaInput)
        return this
    }

    pegarErro(){
        cy.get(this.error)
        return this.error
    }


}