/// <reference types="cypress">
import shippingZoneObject from '../../fixtures/shippingZoneObject.json'
import shippingZoneSchema from '../../contratos/shippingZone.contract'
import { faker } from '@faker-js/faker'


describe ('Shipping Zone', () => {

    it.only('Listar de Shipping Zones - Aceitação', () => {
        cy.getAllShippingZonesWooCommerce()
        .should((response) => {
            expect(response.status).equals(200)
            expect(response.body.length).greaterThan(0)
            for (let i = 0; i < response.body.length; i++){
                cy.validarArrayResponse(shippingZoneSchema,response.body[i]);
            }
        })
    })   
    

    it('Cadastro de Shipping Zone - Aceitação', () => {
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
    
    it('Cadastro de Shipping Zone - Contrato', () => {
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .should((response) => {
            expect(response.status).equals(201)
            expect(response.body.name).equals(shippingZoneObject.name)
            return shippingZoneSchema.validateAsync(response.body)
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })
    })
    
    it('Update de Shipping Zone - Aceitação', () => {
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .then((response) => {
            cy.updateShippingZoneWooCommerce(response.body.id, shippingZoneObject.updatedName)
            .should((response) => {
                expect(response.status).equals(shippingZoneObject.statusok)
                expect(response.body.name).equals(shippingZoneObject.updatedName) 
            })
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })
       
    })

    it('Update de Shipping Zone - Contrato', () => {
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .then((response) => {
            cy.updateShippingZoneWooCommerce(response.body.id, shippingZoneObject.updatedName)
            .should((response) => {
                expect(response.status).equals(shippingZoneObject.statusok)
                expect(response.body.name).equals(shippingZoneObject.updatedName) 
                return shippingZoneSchema.validateAsync(response.body)
            })
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })
       
    })
    
    it('Deletar Shipping Zone - Aceitação', () => {        
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .then((response) => {           
            cy.deleteShippingZoneWooCommerce(response.body.id)
            .then((response) => {
                expect(response.status).equals(200)
            })
        })        
    })
    
    it('Deletar Shipping Zone - Contrato', () => {        
        cy.postShippingZoneWooCommerce(shippingZoneObject.name)
        .then((response) => {         
            cy.deleteShippingZoneWooCommerce(response.body.id)
            .then((response) => {
                expect(response.status).equals(200)
                return shippingZoneSchema.validateAsync(response.body)
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
