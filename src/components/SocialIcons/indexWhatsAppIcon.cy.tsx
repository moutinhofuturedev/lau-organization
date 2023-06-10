import React from 'react'
import { WhatsAppIcon } from './index'

describe('<WhatsAppIcon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WhatsAppIcon />)

    cy.get("[data-cy='svg-whatsapp']").should("be.visible")
  })
})