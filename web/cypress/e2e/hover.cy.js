/// <reference types="cypress" />

describe('Simulando um mouseover', () => {
    it('Deve mostrar texto ao passar mouse em cima do link do instagram', () => {
        cy.login();

        //Analisando existencia de texto de mouseover
        cy.contains('Isso é Mouseover!').should('not.exist');
        cy.get('[data-cy="instagram-link"]').realHover();
        cy.contains('Isso é Mouseover!').should('exist');
    });
})