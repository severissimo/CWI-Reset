describe('TodoMVC', () => {

    it('Adicionar uma nova tarefa', () => {
        //Teste 1
        cy.visit("https://todomvc-app-for-testing.surge.sh/")
        cy.get("input.new-todo").type('Teste de Automação{enter}')

        //Assert
        cy.get('ul.todo-list li').should('have.length', 1)
        //---

         //Teste 2
         cy.visit("https://todomvc-app-for-testing.surge.sh/")
         cy.get("input.new-todo").type('Teste de Automação{enter}')
         cy.get("input.new-todo").type('Tarefa 2{enter}')
         cy.get("input.new-todo").type('Tarefa 3{enter}')
         cy.get("input.new-todo").type('Tarefa 4{enter}')
         cy.get("input.new-todo").type('Tarefa 5{enter}')
         //Assert
         cy.get('ul.todo-list li').should('have.length', 5)
         //---
    })
});


