/// <reference types="cypress" />
Cypress.Commands.add("checkLinkVip", () => {
    cy.get('[href="https://assessoriavip.com.br/funnelFormLead/1d396804-ee97-4ca9-8318-7cfe1a1ed083"]')
    .should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();
})

Cypress.Commands.add("checkLinkPinterest", () => {
    cy.get('[href="https://br.pinterest.com/laudiceiaandre/"]')
    .should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();
})

Cypress.Commands.add("checkLinkPost", () => {
    cy.get('[href="https://www.instagram.com/p/Cj_Jm1Vu3IF/?igshid=MzRlODBiNWFlZA%3D%3D"]')
    .should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();
})