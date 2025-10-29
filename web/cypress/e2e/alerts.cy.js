/// <reference types="cypress" />
describe('Validações de alertas em JS', () => {
    
    beforeEach(() => {
        cy.login();
        cy.goTo('Alertas JS', 'JavaScript Alerts');
    });

    it('Deve validar a mensagem de alerta', () => {
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!');
        })
        
        cy.contains('button', 'Mostrar Alert').click();
    });

    it('Deve confirmar um dialogo e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!');
            return true; //True simula aperto em botão confirmar
        });

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!');
        });

        cy.contains('button', 'Mostrar Confirm').click();
    });

    it('Deve confirmar um dialogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!');
            return false; //False simula aperto em botão cancelar
        });

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!');
        });

        cy.contains('button', 'Mostrar Confirm').click();
    });

    it('Deve interagir com o prompt, inserir texto e validar mensagem', () => {
        cy.window().then( (win) => {
            cy.stub(win, 'prompt').returns('Oséias');
        });

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá Oséias! Boas-vindas ao WebDojo!');
        });

        cy.contains('button', 'Mostrar Prompt').click();
    });
});