/// <reference types="cypress">
import token from '../../fixtures/token.json'
import shippingZoneFixture from '../../fixtures/shippingZoneFixture.json'

Cypress.Commands.add('getAllShippingZonesWooCommerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/shipping/zones',            
        headers: { Authorization: token.token }
    })
}),

Cypress.Commands.add('postShippingZoneWooCommerce', (name) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/shipping/zones',            
        headers: { Authorization: token.token },
        body: {
            name: name
        }
    })
}),

Cypress.Commands.add('updateShippingZoneWooCommerce', (id, name) => {
    cy.request({
        method: 'PUT',
        url: Cypress.config('baseUrl') + '/shipping/zones/' + id,            
        headers: { Authorization: token.token },
        body: {
            name: name,
            //order: order
        }
    })
}),

Cypress.Commands.add('deleteShippingZoneWooCommerce', (id) => {
    cy.request({
        method: 'DELETE',
        url: Cypress.config('baseUrl') + '/shipping/zones/' + id + shippingZoneFixture.force,        
        headers: { Authorization: token.token }
    })
})

Cypress.Commands.add('getOneShippingZonesWooCommerce', (id) => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/shipping/zones/' + id,      
        headers: { Authorization: token.token }
    })
})

Cypress.Commands.add('validarArrayResponse', (shippingZoneSchema, responsebody) => {
    return shippingZoneSchema.validateAsync(responsebody)
})