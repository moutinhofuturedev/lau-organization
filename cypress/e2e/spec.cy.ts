describe('Home', () => {
  it('visit the page', () => {
    cy.visit('/');

    cy.title().should('contain', 'Lau Organização | Assessoria e Cerimonial');
  });
});