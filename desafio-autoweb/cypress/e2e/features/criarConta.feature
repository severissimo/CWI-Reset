Feature: Criar Conta

    Scenario: Criar Conta
        Given que eu crio uma Conta
        When eu adiciono um Endereço
        Then eu vejo o Endereço na tela 'My Account'