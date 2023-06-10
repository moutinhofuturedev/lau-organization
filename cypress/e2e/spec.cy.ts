describe('Home', () => {
  beforeEach('visit the page', () => {
    cy.visit('/');

    cy.title().should('contain', 'Lau Organização | Assessoria e Cerimonial');
  });

  it("deve renderizar por padrão na página", () => {
    cy.get("h1").contains("LAU ORGANIZAÇÃO").should("be.visible");
    cy.contains("Assessoria e Cerimonial").should("be.visible");
    cy.contains("Copyright © Lau Organização 2023.Suzano, SP.").should("be.visible");
  });

  it("deve verificar props target e clicar em link para abrir página ( Assessoria VIP ) sem _blank", () => {
    cy.checkLinkVip()
  });

  it("deve verificar props target e clicar em link para abrir página ( Pinterest ) sem _blank", () => {
    cy.checkLinkPinterest()
  });

  it("deve verificar props target e clicar em link para abrir página ( Post Instagram ) sem _blank", () => {
    cy.checkLinkPost()
  });
});