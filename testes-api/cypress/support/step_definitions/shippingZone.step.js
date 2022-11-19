/// <reference types="cypress">
import shippingZoneFixture from '../../fixtures/shippingZoneFixture'
import statusFixture from '../../fixtures/statusFixture.json'
import shippingZoneSchema from '../../contratos/shippingZone.contract'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("", () => {

});

When("eu envio uma request GET", () => {
    cy.getAllShippingZonesWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.length).greaterThan(0)
        })
});

Then("eu recebo uma lista com todas as ShippingZones", () => {
    cy.getAllShippingZonesWooCommerce()
        .should((response) => {
            expect(response.status).equals(statusFixture.ok)
            expect(response.body.length).greaterThan(0)
            for (let i = 0; i < response.body.length; i++){
                cy.validarArrayResponse(shippingZoneSchema,response.body[i]);
            }
        })
});