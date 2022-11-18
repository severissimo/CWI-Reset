/// <reference types="cypress">
import shippingZoneObject from '../../fixtures/shippingZoneObject.json'
import productCategoriesSchema from '../../contratos/categories'
import { faker } from '@faker-js/faker'


describe ('Shipping Zone', () => {

    it('Listar de Shipping Zones - Aceitação', () => {
        cy.getAllShippingZonesWooCommerce()
        .should((response) => {
            expect(response.status).equals(200)
            expect(response.body.length).greaterThan(0)
        })
    })   
    

    it.only('Cadastro de Shipping Zone - Aceitação', () => {
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .should((response) => {
            expect(response.status).equals(201)
            expect(response.body.name).equals(shippingZoneObject.name)
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
            .then((response) => {
                expect(response.status).equals(200)
            })
        })
    })
    
    it('Update de Shipping Zone - Aceitação', () => {
        cy.updateShippingZoneWooCommerce('1', 'vrau')
        .should((response) => {
            expect(response.status).equals(200)
            expect(response.body.name).equals('vrau')
        })
        cy.updateShippingZoneWooCommerce('1', 'Teste')
        .should((response) => {
            expect(response.status).equals(200)
            expect(response.body.name).equals(shippingZoneObject.name)
        })
    })
    
    it('Deletar Shipping Zone - Aceitação', () => {        
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .then((response) => {
            expect(response.status).equals(201)            
            cy.deleteShippingZoneWooCommerce(response.body.id)
            .then((response) => {
                expect(response.status).equals(200)
            })
        })        
    })

    /* it('Listar Uma Shipping Zone - Aceitação', () => {
        cy.getOneShippingZonesWooCommerce()
        .should((listarShippingZonesResponse) => {
            expect(listarShippingZonesResponse.status).equals(200)
            expect(listarShippingZonesResponse.body.name).equals('Teste')
        })
    }) */
})
