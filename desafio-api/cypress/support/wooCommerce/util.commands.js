Cypress.Commands.add('validarArrayResponse', (schema, responsebody) => {
    return schema.validateAsync(responsebody)
})