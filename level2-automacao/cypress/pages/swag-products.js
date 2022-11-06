export default class SwagProducts {
    url = 'https://www.saucedemo.com/inventory.html'
    btnAddToCartMochila = '[data-test="add-to-cart-sauce-labs-backpack"]'
    btnAddToCartBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    btnAddToCartBoltShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    btnAddToCartJaqueta = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    btnRemoverJaqueta ='[data-test="remove-sauce-labs-fleece-jacket"]'
    btnAddToCartOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]'
    btnAddToCartTestAllThings = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    btnCarrinho = '.shopping_cart_link'
    qtdCarrinho = '.shopping_cart_badge'
    btnBurgerMenu = '#react-burger-menu-btn'
    btnLogout = '#logout_sidebar_link'

    addJaquetaCarrinho(){
        cy.get(this.btnAddToCartJaqueta).click()
    }

    removerJaquetaCarrinho(){
        cy.get(this.btnRemoverJaqueta).click()
    }
    
    addCamisaCarrinho(){
        cy.get(this.btnAddToCartBoltShirt).click()
    }

    visualizarCarrinho(){
        cy.get(this.btnCarrinho).click()
    }

    verificarPagina(){
        cy.url().should('equals', this.url)
    }

    verificarCarrinhoUmProduto(){
        cy.get(this.qtdCarrinho).should('have.text','1')
    }
    
    verificarCarrinhoDoisProdutos(){
        cy.get(this.qtdCarrinho).should('have.text','2')
    }
    
    verificarCarrinhoSemProduto(){
        cy.get(this.qtdCarrinho).should('have.length','')
    }

    logout(){
        cy.get(this.btnBurgerMenu).click()
        cy.get(this.btnLogout).click()
    }

    

    
}