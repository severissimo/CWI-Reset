/// <reference types="cypress" />
import SwagPage from "../../pages/swag-page.js";
import SwagProducts from "../../pages/swag-products.js";
import SwagCart from "../../pages/swag-cart.js";
import SwagCheckoutUm from "../../pages/swag-checkoutum.js";
import SwagCheckoutDois from "../../pages/swag-checkoutdois.js";
import SwagOrderCompleted from "../../pages/swag-ordercompleted.js";

const swagPage = new SwagPage()
const swagProducts = new SwagProducts()
const swagCart = new SwagCart()
const swagCheckoutUm = new SwagCheckoutUm()
const swagCheckoutDois = new SwagCheckoutDois()
const swagOrderCompleted = new SwagOrderCompleted()


describe('Swag Labs', () => {

    beforeEach (() => {
        swagPage.acessar()
        //
    })

    it('Deve tentar acessar sem Username', () => {
        swagPage.clicarLogin()
        swagPage.pegarErro().should('have.text','Epic sadface: Username is required')
        })

    it('Deve tentar login sem senha', () => {
        swagPage.loginStandardUser('standard_user','{enter}')
        swagPage.pegarErro().should('have.text','Epic sadface: Password is required')
    })

    it('Deve exibir mensagem ao logar sem informar usuário nem senha', () => {
        swagPage.loginStandardUser('{enter}','{enter}')
        swagPage.pegarErro().should('have.text','Epic sadface: Username is required')
    })

    it('Deve exibir mensagem ao logar com usuário bloqueado', () => {
        swagPage.loginLockedOutUser()
        swagPage.pegarErro().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    //it('Deve exibir mensagem ao acessar página de produtos sem estar autenticado', () => {
    //    cy.visit(swagProducts.url)
    //})

    it('Deve logar com sucesso', () => {
        swagPage.loginStandardUser()
        swagProducts.verificarPagina()
    })
    
    it('Deve exibir a página de login ao selecionar a opção de logout', () => {
        swagPage.loginStandardUser()
        swagProducts.verificarPagina()
        swagProducts.logout()
        swagPage.verificarPagina()
    })
    
    it('Deve exibir mensagem ao acessar página de produtos após ter feito logout', () => {
        swagPage.loginStandardUser()
        swagProducts.verificarPagina()
        swagProducts.logout()
        swagPage.verificarPagina()
    })
    
    it('Deve exibir carrinho vazio ao acessar sem ter adicionado itens no carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.verificarPagina()
        swagProducts.visualizarCarrinho()
        swagCart.verificarCarrinhoVazio()
    })     
    
    it('Deve exibir produto adicionado no carrinho ao acessar o carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()        
        swagCart.verificarCarrinhoUmItem()        
    })
    
    it('Deve exibir produtos adicionados no carrinho ao acessar o carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.addCamisaCarrinho()
        swagProducts.visualizarCarrinho() 
        swagCart.verificarCarrinhoDoisItem()      
    })

    it('Deve exibir no icone de carrinho quantos produtos foram adicionados no carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.verificarCarrinhoUmProduto()  
    })
    
    it('Deve exibir no icone de carrinho quantos produtos restaram ao remover produto do carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.removerJaquetaCarrinho()
        swagProducts.verificarCarrinhoSemProduto()  
    })
    
    it('Deve exibir no icone de carrinho quantos produtos foram adicionados no carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.addCamisaCarrinho()
        swagProducts.verificarCarrinhoDoisProdutos()  
    })
    
    it('Deve exibir no icone de carrinho quantos produtos restaram ao remover produto do carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.addCamisaCarrinho()
        swagProducts.removerJaquetaCarrinho()
        swagProducts.verificarCarrinhoUmProduto()  
    })

    it('Deve remover produto do a partir da página de carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho() 
        swagCart.removerJaqueta()
        swagCart.verificarCarrinhoVazio()      
    })
    
    it('Deve remover produto de dois a partir da página de carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.addCamisaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.removerJaqueta() 
        swagCart.verificarCarrinhoUmItem()      
    })

    it('Deve exibir página do checkout a partir da página de carrinho', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.verificarPagina()
    })
    
    it('Deve exibir mensagem ao prosseguir sem preencher identificação', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.verificarPagina()
        swagCheckoutUm.adicionarInfos('{backspace}','{backspace}','{backspace}')
        swagCheckoutUm.pegarErro().should('have.text', swagCheckoutUm.msgErrorFirstName)
    })
    
    it('Deve exibir mensagem ao prosseguir sem preencher primeiro nome', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.verificarPagina()
        swagCheckoutUm.adicionarInfos('{backspace}','qwe','012345')
        swagCheckoutUm.pegarErro().should('have.text', swagCheckoutUm.msgErrorFirstName)
    })
    
    it('Deve exibir mensagem ao prosseguir sem preencher primeiro nome', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.verificarPagina()
        swagCheckoutUm.adicionarInfos('qwe','{backspace}','012345')
        swagCheckoutUm.pegarErro().should('have.text', swagCheckoutUm.msgErrorLastName)
    })
    
    it('Deve exibir mensagem ao prosseguir sem preencher cep', () => {
        swagPage.loginStandardUser()
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.verificarPagina()
        swagCheckoutUm.adicionarInfos('qwe','qwe','{backspace}')
        swagCheckoutUm.pegarErro().should('have.text', swagCheckoutUm.msgErrorZip)
    })

    it('Deve exibir página de revisão da compra ao prosseguir com identificação válida', () => {
        swagPage.loginStandardUser('standard_user','secret_sauce')
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.adicionarInfos('qwe','qwe','012345')
        swagCheckoutDois.verificarPagina()
    })

    it('Deve exibir página de compra finalizada ao finalizar compra', () => {
        swagPage.loginStandardUser('standard_user','secret_sauce')
        swagProducts.addJaquetaCarrinho()
        swagProducts.visualizarCarrinho()
        swagCart.checkout()
        swagCheckoutUm.adicionarInfos('qwe','qwe','012345')
        swagCheckoutDois.finalizarCompra()
        swagOrderCompleted.verificarPagina
        swagOrderCompleted.pedidoFeito()
    })
    

    
})
