// eslint-disable-next-line no-unused-vars
declare namespace Cypress {
  interface Chainable {
    /**
     * Comando customizado para checar link de Assessoria Vip
     * @example cy.checkLinkVip('link')
     */
    checkLinkVip(): Chainable<Element>

    /**
     * Comando customizado para checar link do Pinterest
     * @example cy.checkLinkPinteresr('link')
     */
    checkLinkPinterest(): Chainable<Element>

    /**
     * Comando customizado para checar link de post do Instagram
     * @example cy.checkLinkPost('link')
     */
    checkLinkPost(): Chainable<Element>
  }
}
