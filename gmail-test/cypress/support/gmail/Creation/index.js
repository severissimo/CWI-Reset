// acoes de interacoes com a pagina

const el = require('./elements').ELEMENTS;

class Creation {
    acessarCreation(){
        cy.visit(el.page);
        cy.get(el.buttonCreation).click();
        cy.get(el.buttonSelection).click();
    }

    preencherCreation(){
        cy.get(el.name).type('Fulano{enter}');
        cy.get(el.lastname).type('Beltrano');
        cy.get(el.email).type('fulanobeltrano');
        cy.get(el.passw).type('0987654321');
        cy.get(el.confpassw).type('0987654321');
    }
}

export default new Creation()