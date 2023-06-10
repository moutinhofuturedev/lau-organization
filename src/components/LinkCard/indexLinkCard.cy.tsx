import React from 'react'
import { LinkCard } from './index'
import data from "../../../data.json"

describe('<LinkCard />', () => {
  beforeEach('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LinkCard title={data.links[0].title} url={data.links[0].url}/>);

    cy.get("[data-cy='link']").contains("Vamos conversar?").should("be.visible");
  });

  it("deve conter conteúdo de tag heading", () => {
    cy.get("[data-cy='link']").within(() => {
      cy.get("h2").should("be.visible");
    });
  });

  it("deve conter atributos html", () => {
    cy.get("[data-cy='link']").should("have.attr", "href")
    cy.get("[data-cy='link']").should("have.attr", "target")
    cy.get("[data-cy='link']").should("have.attr", "class")
  });
});