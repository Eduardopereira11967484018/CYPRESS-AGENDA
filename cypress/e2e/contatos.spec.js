// cypress/e2e/formulario.spec.js

describe('Testar funcionalidades do Formulário', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve incluir um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('João Silva');
        cy.get('input[placeholder="E-mail"]').type('joao.silva@example.com');
        cy.get('input[placeholder="Telefone"]').type('1234567890');
        cy.get('button').contains('Adicionar').click();

        // Verifica se o contato foi adicionado
        cy.contains('João Silva').should('be.visible');
        cy.contains('joao.silva@example.com').should('be.visible');
        cy.contains('1234567890').should('be.visible');
    });

    it('Deve alterar um contato existente', () => {
        // Adiciona um contato primeiro
        cy.get('input[placeholder="Nome"]').type('João Silva');
        cy.get('input[placeholder="E-mail"]').type('joao.silva@example.com');
        cy.get('input[placeholder="Telefone"]').type('1234567890');
        cy.get('button').contains('Adicionar').click();

        // Edita o contato
        cy.contains('João Silva').parent().find('button').contains('Editar').click();
        cy.get('input[placeholder="Nome"]').clear().type('João Silva Atualizado');
        cy.get('button').contains('Salvar').click();

        // Verifica se o contato foi atualizado
        cy.contains('João Silva Atualizado').should('be.visible');
    });

    it('Deve remover um contato', () => {
        // Adiciona um contato primeiro
        cy.get('input[placeholder="Nome"]').type('João Silva Atualizado');
        cy.get('input[placeholder="E-mail"]').type('joao.silva@example.com');
        cy.get('input[placeholder="Telefone"]').type('1234567890');
        cy.get('button').contains('Adicionar').click();

        // Remove o contato
        cy.contains('João Silva Atualizado').parent().find('button').contains('Deletar').click();
        cy.get('button').contains('Confirmar').click();

        // Verifica se o contato foi removido
        cy.contains('João Silva Atualizado').should('not.exist');
    });
});
