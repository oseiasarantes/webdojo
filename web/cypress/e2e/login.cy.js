import { dataHojeFormatada} from '..//support/utils';

/// <reference types="cypress" />

describe('login', () => {

  it('Deve logar com sucesso', () => {
    cy.iniciar();
    cy.submeterLogin('papito@webdojo.com', 'katana123');
  
    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito');

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.');

    cy.getCookie('login_date')
      .should('exist');

    cy.getCookie('login_date')
      .should( (cookie) => {
        expect(cookie.value).to.eq(dataHojeFormatada());
      });

    cy.window().then( (win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.match(/^[0-9a-fA-F]{32}$/);
    });

  });

  it('Não deve logar com email inválido', () => {
    cy.iniciar();
    cy.submeterLogin('fake@mail.com', 'katana123');

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible');
  });

  it('Não deve logar com senha inválida', () => {
    cy.iniciar();
    cy.submeterLogin('papito@webdojo.com', 'katana322');

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible');
  });
})