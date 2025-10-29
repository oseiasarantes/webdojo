/// <reference types="cypress" />

describe('Baixar e avaliar PDF', () => {

    const pastaDownload = Cypress.config('downloadsFolder');

    it('Baixa com sucesso pdf e faz validação', () => {
        cy.visit('https://ouropreto.ifmg.edu.br/ouropreto/noticias/pdf-teste-8mb.pdf/view');

        cy.get('.documentFirstHeading')
            .should('be.visible');

        cy.get('#content-core')
            .contains('a', 'PDF-TESTE-8MB.pdf')
            .should('be.visible')
            .click();

        cy.task('deletarPasta', pastaDownload);
    });
});