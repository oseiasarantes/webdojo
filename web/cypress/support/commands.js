import 'cypress-real-events';
import '../support/actions/consultoria.actions';
import {dataHojeFormatada} from '..//support/utils';

Cypress.Commands.add('iniciar', () => {
    cy.visit('/');
});

Cypress.Commands.add('submeterLogin', (email, senha) => {
    cy.get('#email').type(email);
    cy.get('#password').type(senha);

    cy.contains('button', 'Entrar').click();
});

Cypress.Commands.add('goTo', (buttonName, pageTitle) => {

    cy.contains('button', buttonName)
        .should('be.visible')
        .click();

    cy.contains('h1', pageTitle)
        .should('be.visible');

});

//HELPER
Cypress.Commands.add('login', (isPassarPaginaLogin = false) => {

    if (isPassarPaginaLogin) {
        cy.iniciar();
        cy.submeterLogin('papito@webdojo.com', 'katana123');
    } else {
        const token = 'e1033d63a53fe66c0fd3451c7fd8f617';

        cy.setCookie('login_date', dataHojeFormatada());

        cy.visit('/dashboard', {
            onBeforeLoad(win) {
                win.localStorage.setItem('token', token);
            }
        });
    }
})