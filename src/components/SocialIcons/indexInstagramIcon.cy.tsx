import React from 'react'
import { InstagramIcon } from './index'

describe('<InstagramIcon />', () => {
  it('renderiza o componente de ícone svg corretamente', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InstagramIcon />)

    cy.get("[data-cy='svg-instagram']").should("be.visible")
  });
})