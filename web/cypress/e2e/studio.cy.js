describe('Studio', () => {
  it('Teste padrão studio', () => {
    cy.visit('https://example.cypress.io')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1')
      .should('be.visible')
      .should('have.text', 'Kitchen Sink');
    /* ==== End Cypress Studio ==== */
  })

  it('Login WebDojo com Studio', () => {

    cy.visit('/');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email')
      .type('papito@webdojo.com');

    cy.get('#password')
      .type('katana123');
    
    cy.contains('button', 'Entrar').click();
    
    cy.get('.text-3xl')
      .should('be.visible')
      .should('have.text', 'Dashboard');
    /* ==== End Cypress Studio ==== */
  });
})