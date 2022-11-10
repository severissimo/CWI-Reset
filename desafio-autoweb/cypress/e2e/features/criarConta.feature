Feature: Criar Conta

    Scenario: Criar Conta e adicionar um Endereço
        Given que eu crio uma Conta
        When eu adiciono um Endereço
        Then eu vejo o Endereço na tela 'My Account'        