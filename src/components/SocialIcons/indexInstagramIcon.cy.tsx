/* eslint-disable no-undef */
import React from 'react'
import { InstagramIcon } from './index'

describe('<InstagramIcon />', () => {
  it('renderiza o componente de ícone svg corretamente', () => {
    cy.mount(<InstagramIcon />)

    cy.get("[data-cy='svg-instagram']").should('be.visible')
  })
})
