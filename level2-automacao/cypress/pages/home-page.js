export class HomePage {
    url = 'https://cena.reset.cwi.com.br/'
    produtosGrid = '.product-block.grid'

    acessar(){
        cy.visit(this.url)
    }

    detalharPrimeiroProduto() {
        cy.get(this.produtosGrid).first().click()
    }

}