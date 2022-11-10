import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

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

Given("que eu crio uma Conta", () => {
    homePage.visitar()
    homePage.criarConta()
    creationPage.preencherDados()    
    creationPage.botaoCriarConta().click()
    });

When("eu adiciono um Endereço", () => {
    myAccountPage.botaoEditarEndereco().click()
    newAddressPage.preencherDados()
    newAddressPage.botaoSalvarEndereco().click()
    });

Then("eu vejo o Endereço na tela 'My Account'", () => {
    addressBookPage.botaoMyAccount().click()
    homePage.verificarEndereco().should('not.be.empty')
    });