import { perfilDev, perfilQa, perfilReal} from '../fixtures/perfilGithub.json'
import '../support/actions/github.actions'

/// <reference types="cypress" />

describe('Gerenciamento de perfis no github', () => {

    beforeEach(() => {
        cy.login();
        cy.goTo('Tabela', 'Perfis do GitHub');
    });

    it('Deve cadastrar um novo perfil do github', () => {

        //preenche mais de um perfil
        cy.preenchePerfilGithub(perfilQa);
        cy.submetePerfilGithub();

        cy.preenchePerfilGithub(perfilDev);
        cy.submetePerfilGithub();

        cy.contains('table tbody tr', perfilQa.username)
            .should('be.visible')
            .as('trProfile');

        cy.get('@trProfile')
            .contains(perfilQa.name)
            .should('be.visible');

        cy.get('@trProfile')
            .contains(perfilQa.profile)
            .should('be.visible');
    });

    it('Deve remover um perfil do github', () => {
        cy.preenchePerfilGithub(perfilQa);
        cy.submetePerfilGithub();

        cy.contains('table tbody tr', perfilQa.username)
            .should('be.visible')
            .as('trProfile');

        cy.get('@trProfile').find('button[title="Remover perfil"]').click();

        cy.contains('table tbody', perfilQa.username)
            .should('not.exist');
    });

    it('Valida link para perfil do github', () => {
        cy.preenchePerfilGithub(perfilReal);
        cy.submetePerfilGithub();

        cy.contains('table tbody tr', perfilReal.username)
            .should('be.visible')
            .as('trProfile');

        cy.get('@trProfile')
            .find('a')
            .should('have.attr', 'href', perfilReal.url)
            .and('have.attr', 'target', '_blank');
    });
});