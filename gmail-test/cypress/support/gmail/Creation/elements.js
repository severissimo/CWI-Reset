// elementos da página
/* 
cy.visit('https://mail.google.com/');
cy.get('[jsname="WjL7X"] > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
cy.get('[jsname="RZzeR"] > .VfPpkd-StrnGf-rymPhb-b9t22c').click(); 
cy.get('#firstName').type('Fulano{enter}');
cy.get('#lastName').type('Beltrano');
cy.get('#username').type('fulanobeltran');
cy.get('#passwd').type('0987654321');
cy.get('#confirm-passwd').type('0987654321');
*/

export const ELEMENTS = {
    page: 'https://mail.google.com/',
    buttonCreation: '[jsname="WjL7X"] > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d',
    buttonSelection: '[jsname="RZzeR"] > .VfPpkd-StrnGf-rymPhb-b9t22c',
    name: '#firstName',
    lastname: '#lastName',
    email: '#username',
    passw: '#passwd',
    confpassw: '#confirm-passwd',
}