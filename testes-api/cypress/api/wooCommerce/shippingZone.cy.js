/// <reference types="cypress">
import shippingZoneFixture from '../../fixtures/shippingZoneFixture'
import statusFixture from '../../fixtures/statusFixture.json'
import shippingZoneSchema from '../../contratos/shippingZone.contract'
import { faker } from '@faker-js/faker'


describe ('Shipping Zone', () => {

    it('Listar de Shipping Zones - Aceitação', () => {
        cy.getAllShippingZonesWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.length).greaterThan(0)
        })
    })

    it('Listar de Shipping Zones - Contrato', () => {
        cy.getAllShippingZonesWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.length).greaterThan(0)
            for (let i = 0; i < response.body.length; i++){
                cy.validarArrayResponse(shippingZoneSchema,response.body[i]);
            }
        })
    })       

    it('Cadastro de Shipping Zone - Aceitação', () => {
        cy.postShippingZoneWooCommerce(shippingZoneFixture.name)
        .should((response) => {
            expect(response.status).equals(statusFixture.created)
            expect(response.body.name).equals(shippingZoneFixture.name)
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })
    })
    
    it('Cadastro de Shipping Zone - Contrato', () => {
        cy.postShippingZoneWooCommerce(shippingZoneFixture.name)
        .should((response) => {
            expect(response.status).equals(statusFixture.created)
            expect(response.body.name).equals(shippingZoneFixture.name)
            return shippingZoneSchema.validateAsync(response.body)
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })
    })
    
    it('Update de Shipping Zone - Aceitação', () => {
        cy.postShippingZoneWooCommerce(shippingZoneFixture.name)
        .then((response) => {
            cy.updateShippingZoneWooCommerce(response.body.id, shippingZoneFixture.updatedName)
            .should((response) => {
                expect(response.status).equals(statusFixture.ok)
                expect(response.body.name).equals(shippingZoneFixture.updatedName) 
            })
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })       
    })

    it('Update de Shipping Zone - Contrato', () => {
        cy.postShippingZoneWooCommerce(shippingZoneFixture.name)
        .then((response) => {
            cy.updateShippingZoneWooCommerce(response.body.id, shippingZoneFixture.updatedName)
            .should((response) => {
                expect(response.status).equals(statusFixture.ok)
                expect(response.body.name).equals(shippingZoneFixture.updatedName) 
                return shippingZoneSchema.validateAsync(response.body)
            })
        }).then((response) => {
            cy.deleteShippingZoneWooCommerce(response.body.id)
        })
       
    })
    
    it('Deletar Shipping Zone - Aceitação', () => {        
        cy.postShippingZoneWooCommerce(shippingZoneFixture.name)
        .then((response) => {           
            cy.deleteShippingZoneWooCommerce(response.body.id)
            .then((response) => {
                expect(response.status).equals(statusFixture.ok)
            })
        })        
    })
    
    it('Deletar Shipping Zone - Contrato', () => {        
        cy.postShippingZoneWooCommerce(shippingZoneFixture.name)
        .then((response) => {         
            cy.deleteShippingZoneWooCommerce(response.body.id)
            .then((response) => {
                expect(response.status).equals(statusFixture.ok)
                return shippingZoneSchema.validateAsync(response.body)
            })
        })        
    })
})
