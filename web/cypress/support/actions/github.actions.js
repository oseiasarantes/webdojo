/// <reference types="cypress" />

Cypress.Commands.add('preenchePerfilGithub', (perfil) => {
    cy.get('#name').type(perfil.name);
    cy.get('#username').type(perfil.username);
    cy.get('#profile').type(perfil.profile);
});

Cypress.Commands.add('submetePerfilGithub', () => {
    cy.contains('button', 'Adicionar Perfil')
        .should('be.visible')
        .click();
});