describe('Home', () => {
  beforeEach('visit the page', () => {
    cy.visit('/');

    cy.title().should('contain', 'Lau Organização | Assessoria e Cerimonial');
  });

  it("deve renderizar padrões de descrições da página", () => {
    cy.get("h1").contains("LAU ORGANIZAÇÃO").should("be.visible");
    cy.contains("Assessoria e Cerimonial").should("be.visible");
    cy.contains("Copyright © Lau Organização 2023.Suzano, SP.").should("be.visible");
  })
});