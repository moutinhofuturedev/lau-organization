import React from 'react';
import { WhatsAppIcon } from './index';

describe('<WhatsAppIcon />', () => {
  it('renders', () => {
    cy.mount(<WhatsAppIcon />);

    cy.get("[data-cy='svg-whatsapp']").should("be.visible");
  });
});