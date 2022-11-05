export default class SwagProducts {
    url = 'https://www.saucedemo.com/inventory.html'
    btnAddToCartMochila = '[data-test="add-to-cart-sauce-labs-backpack"]'
    btnAddToCartBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    btnAddToCartBoltShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    btnAddToCartJaqueta = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    btnAddToCartOnesie = '[data-test="add-to-cart-sauce-labs-onesie"]'
    btnAddToCartTestAllThings = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    btnCarrinho = '.shopping_cart_link'

    addJaquetaCarrinho(){
        cy.get(this.btnAddToCartJaqueta).click()
    }

    visualizarCarrinho(){
        cy.get(this.btnCarrinho).click()
    }

    

    
}