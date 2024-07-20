/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(()  => {
        cy.visit(' https://agenda-contatos-react.vercel.app/;')
    })

    it('Deve adicionar um contato na agenda', () => {
        cy.get('[type="text"]').type('Cypress')
        cy.get('[type="email"]').type('cypress@gmail.com')
        cy.get('[type="tel"]').type('40028922')
        cy.get('.adicionar').click()
        cy.contains('Cypress').should('be.visible')
    })

    it('Deve editar um contato na agenda', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('Editado')
        cy.get('.alterar').click()
        cy.contains('Editado').should('be.visible')
    })

    it('Deve remover um contato na agenda', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.contains('Editado').should('not.exist')
    })
});
