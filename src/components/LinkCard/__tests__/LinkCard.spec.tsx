import React from 'react'
import { render, screen } from '@testing-library/react'

import { LinkCard } from '../index'

describe('LinkCard component', () => {
  const mockProps = {
    url: 'https://example.com',
    title: 'Example Link',
  }

  test('renders link with correct title', () => {
    render(<LinkCard {...mockProps} />)

    const titleElement = screen.getByText(mockProps.title)

    expect(titleElement).toBeInTheDocument()
  })

  test('renders with data-cy attribute', () => {
    render(<LinkCard {...mockProps} />)

    const linkElement = screen.getByTestId('link')
    expect(linkElement).toBeInTheDocument()
  })
})
