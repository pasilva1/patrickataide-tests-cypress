describe('Portfolio Patrick Ataíde - Testes Funcionais', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('FT-001 - Carregamento da página inicial', () => {
    cy.title().should('include', 'Patrick Ataíde');
  });

  it('FT-002 - Navegação pelo menu', () => {
    cy.contains('a', 'Tecnologias').click();
    cy.get('#tecnologias').should('be.visible');
  });

  it('FT-003 - Seção de Tecnologias', () => {
    cy.contains('Playwright').should('be.visible');
    cy.contains('Cypress').should('be.visible');
    cy.contains('Selenium').should('be.visible');
  });

  it('FT-004 - Informações de contato', () => {
    cy.contains('patrickataide.ti@gmail.com').should('be.visible');
  });

  it('FT-005 - Links de projetos', () => {
    cy.contains('a', 'Ver projeto').should('have.attr', 'href');
  });
});
