import { pessoaFisica, pessoaJuridica } from '../fixtures/consultoria.json';

/// <reference types="cypress" />

describe('Formulário de Consultoria', () => {

    beforeEach(() => {
        cy.login();
        cy.goTo('Formulário', 'Consultoria');
    });

    it('Deve solicitar consultoria PF - Individual', () => {
        cy.preencheFormulario(pessoaFisica);
        cy.submeterFormulario();
        cy.validaMensagemSucesso();
    });

    it('Deve solicitar consultoria PJ - In Company', () => {
        cy.preencheFormulario(pessoaJuridica);
        cy.submeterFormulario();
        cy.validaMensagemSucesso();
    });

    it('Deve verificar obrigatoriedade de campos', () => {
        cy.submeterFormulario();

        //Validando mensagem e campos obrigatórios
        const camposObrigatoriosMsgMap = new Map();
        camposObrigatoriosMsgMap.set('Nome Completo', 'Campo obrigatório');
        camposObrigatoriosMsgMap.set('Email', 'Campo obrigatório');
        camposObrigatoriosMsgMap.set('termos de uso', 'Você precisa aceitar os termos de uso');

        camposObrigatoriosMsgMap.forEach((msg, campo) => {
            cy.contains('label', campo)
                .parent()
                .find('p')
                .should('be.visible')
                .should('have.text', msg);
        });

        //Outra opção utilizando array:
        // const camposObrigatoriosArray = [
        //     { label: 'Nome Completo', message: 'Campo obrigatório' },
        //     { label: 'Email', message: 'Campo obrigatório' },
        //     { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
        // ];

        // camposObrigatoriosArray.forEach(({label, message}) => {
        //     cy.contains('label', label)
        //         .parent()
        //         .find('p')
        //         .should('be.visible')
        //         .should('have.text', message);
        // });
    });
})
