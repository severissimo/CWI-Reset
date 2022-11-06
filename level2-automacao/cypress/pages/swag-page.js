export default class SwagPage {
    url = 'https://www.saucedemo.com/'
    btnLogin = '[data-test="login-button"]'
    usernameInput ='[data-test="username"]'
    senhaInput = '[data-test="password"]'
    error = '[data-test="error"]'
    standardUser = 'standard_user'
    senha = 'secret_sauce'

    acessar() {
        cy.visit(this.url)
    }

    loginStandardUser(username, password){
        if (username == undefined && password == undefined){
            this.pegarUsername().type(this.standardUser)
            this.pegarSenha().type(this.senha)
            this.clicarLogin()

        } else {
                this.pegarUsername().type(username)
                this.pegarSenha().type(password)
                this.clicarLogin()
        }
    }
    
    
    loginProblemUser(){
        this.pegarUsername().type('problem_user')
        this.pegarSenha().type(this.senha)
        this.clicarLogin()
    }
    
    loginLockedOutUser(){
        this.pegarUsername().type('locked_out_user')
        this.pegarSenha().type(this.senha)
        this.clicarLogin()
    }
    
    loginPerformanceGlitchUser(){
        this.pegarUsername().type('performance_glitch_user')
        this.pegarSenha().type(this.senha)
        this.clicarLogin()
    }

    clicarLogin(){
        cy.get(this.btnLogin).click()
    }

    pegarUsername(){        
        return cy.get(this.usernameInput)
    }

    pegarSenha(){        
        return cy.get(this.senhaInput)
    }

    pegarErro(){        
        return cy.get(this.error)
    }

    verificarPagina(){
        cy.url().should('equals', this.url)
    }


}