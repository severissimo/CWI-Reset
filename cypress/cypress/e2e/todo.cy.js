describe('TodoMVC', () => {

    it('Adicionar uma nova tarefa', () => {
        cy.visit("https://todomvc-app-for-testing.surge.sh/")
        cy.get("input.new-todo")
    })
});


