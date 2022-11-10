/// <reference types="cypress" />
import HomePage from "../../pages/home-page";
import CreationPage from "../../pages/creation-page"
import MyAccountPage from "../../pages/myaccount-page"
import NewAddressPage from "../../pages/newaddress-page"
import AddressBookPage from "../../pages/addressbook-page"

const homePage =  new HomePage()
const creationPage = new CreationPage()
const myAccountPage = new MyAccountPage()
const newAddressPage = new NewAddressPage()
const addressBookPage = new AddressBookPage()

describe('Teste que Falha', () => {

  it('Faz algo', () => {
    homePage.visitar()
    homePage.criarConta()
    creationPage.preencherDados()
    creationPage.criarConta()
    myAccountPage.editarEndereco()
    newAddressPage.preencherDados()
    newAddressPage.salvarEndereco()
    addressBookPage.visitarMyAccount()
    homePage.verificarEndereco()

  })
})