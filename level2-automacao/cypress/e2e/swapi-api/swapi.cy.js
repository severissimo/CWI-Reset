/// <reference types="cypress"/>
const API_URL = 'https://swapi.dev/api/'
var pessoa = {name: "", mass: "", homeworld: ""}


describe ('Pesquisa de Pessoas', () => {

    it('Pega as infos do personagem', () => {
        var worldname = ""
        var homeworldurl = API_URL

        cy.request({
            method: 'GET',
            url: `${API_URL}people/1`

        }).then(({status, body}) => {
            const { name, mass, homeworld } = body            
            homeworldurl = homeworld

            expect(status).to.eq(200)
            expect(name).to.eq('Luke Skywalker')
            expect(mass).to.eq('77')
            expect(homeworldurl).to.eq('https://swapi.dev/api/planets/1/')
            console.log(homeworldurl)
            //homeworldurl = 'https://swapi.dev/api/planets/1/' 
            cy.request({
                method: 'GET',
                url: `${homeworld}`
            }).should(({status, body}) => {
                const { name } = body
                worldname = name
                expect(worldname).to.eq("Tatooine")
            })                 
        })        
    })
})