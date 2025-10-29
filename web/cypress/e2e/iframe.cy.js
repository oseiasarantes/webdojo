/// <reference types="cypress" />

describe('Iniciar video', () => {
    it('Deve poder iniciar video de exemplo', () => {
        cy.login();
        cy.goTo('Video', 'Video');

        cy.wait(2000); //garantir que o iFrame irá funcionar

        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer');

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click();

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible');
    });
});