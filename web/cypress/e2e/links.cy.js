/// <reference types="cypress" />

describe('Links abrindo nova aba/janela', () => {
    it('Validando o link do instagram', () => {
        cy.login();

        cy.get('[data-cy="instagram-link"]')
        .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
        .and('have.attr', 'target', '_blank');
    });

    it('Acessa link de termos de uso removendo o target blank', () => {
        cy.iniciar();
        cy.submeterLogin('papito@webdojo.com', 'katana123');

        cy.goTo('Formulário', 'Consultoria');

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target').click();

        cy.contains('h1', 'Termos de Uso')
            .should('be.visible');
    });
});