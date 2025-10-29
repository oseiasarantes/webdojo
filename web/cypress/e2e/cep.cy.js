import edereco from '../fixtures/cep.json';
describe('CEP', () => {
    beforeEach(() => {
        cy.login();
        cy.goTo('Integração', 'Consulta de CEP');
    });

    it('Deve validar a consulta de CEP', () => {
        cy.get('#cep').type(edereco.cep);
        cy.contains('button', 'Buscar').click();

        cy.get('#street')
            .should('have.value', edereco.street);

        cy.get('#neighborhood')
            .should('have.value', edereco.neighborhood);

        cy.get('#city')
            .should('have.value', edereco.city);
        
        cy.get('#state')
            .should('have.value', edereco.state);
    });
});