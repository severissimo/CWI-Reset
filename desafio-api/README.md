# Desafio Teste API
**Scripts Disponíveis**
```
    "cy:run:allure": "npx cypress run --env allure=true",
    "allure:generate": "allure generate allure-results --clean",
    "allure:open": "allure open allure-report",
    "test:allure": "npm-run-all cy:run:allure allure:generate"
```

## Planejamento de Testes
1. Criar Ambiente de Testes
2. Fazer Testes de Aceitação
3. Fazer Testes de Contrato 


### Criar Ambiente de Testes
1. Baixar Dependencias :heavy_check_mark:
2. Criar Spec, Fixtures, Contratos :heavy_check_mark:
3. Criar e Importar arquivo de Comandos:heavy_check_mark:

  
### Testes de Aceitação
1. Criar Suite de Testes :heavy_check_mark:
2. Implementar Teste de Aceitação do método GET :heavy_check_mark:
    1. Copiar Objeto de Aceitação da Response :heavy_check_mark:
    2. Criar Schema de Contrato :heavy_check_mark:
3. Implementar Teste de Aceitação do método DELETE :heavy_check_mark:
4. Implementar Testde de Aceitação do método POST :heavy_check_mark:
5. Implementar Testde de Aceitação do método PUT :heavy_check_mark:

  
### Testes de Contrato 
1. Implementar Schema de Contrato :heavy_check_mark:
2. Implementar Teste de Contrato do método GET :heavy_check_mark:
3. Implementar Teste de Contrato do método DELETE :heavy_check_mark:
    1. Criar Schema para DELETE :heavy_check_mark:
4. Implementar Testde de Contrato do método POST:heavy_check_mark:
5. Implementar Testde de Contrato do método PUT :heavy_check_mark: