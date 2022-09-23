/// <reference types="cypress"/>

import Creation from '../support/gmail/Creation/';
import Login from '../support/gmail/Login';

describe('empty spec', () => {
  it('Cria uma Conta', () => {
    // acessar pagina
    Creation.acessarCreation();
    //preencher pagina
    Creation.preencherCreation();

  })
})