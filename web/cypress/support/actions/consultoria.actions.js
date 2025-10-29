/// <reference types="cypress" />

Cypress.Commands.add('preencheFormulario', (form) => {

    cy.get('#name').type(form.nome);
    cy.get('#email').type(form.email);
    cy.get('#phone')
        .type(form.telefone)
        .should('have.value', '(83) 98877-6655');

    cy.get('#consultancyType').select(form.tipoConsultoria);

    if (form.tipoConsultoria === 'Individual') {
        cy.contains('label', 'Pessoa Física')
            .find('input[type="radio"]')
            .check()
            .should('be.checked');

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked');

        cy.get('#document')
            .type(form.documento)
            .should('have.value', '487.395.090-28');
    } else {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input[type="radio"]')
            .check()
            .should('be.checked');

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked');

        cy.get('#document')
            .type(form.documento)
            .should('have.value', '09.372.233/0001-90');
    };

    form.canaisCheckBox.forEach((canal) => {
        cy.contains('label', canal)
            .find('input[type="checkbox"]')
            .check()
            .should('be.checked')
    });

    cy.get('input[type="file"]')
        .selectFile(form.arquivoPath, { force: true });

    cy.get('#details').type(form.descricao);

    form.tecnologias.forEach((tech) => {
        cy.get('#technologies')
            .type(tech)
            .type('{enter}');

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible');
    });

    cy.contains('label', 'termos de uso *')
        .find('input[type="checkbox"]')
        .check()
        .should('be.checked');
});

Cypress.Commands.add('submeterFormulario', () => {
    cy.contains('button', 'Enviar formulário')
        .click();
});

Cypress.Commands.add('validaMensagemSucesso', () => {
    const msgSucesso = 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.';

    cy.get('.modal', { timeout: 7500 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .should('have.text', msgSucesso);
});