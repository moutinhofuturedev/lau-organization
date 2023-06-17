import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

import Home from './page'

describe('Page Home', () => {
  it('deve renderizar items por padrão', () => {
    render(<Home />)

    const title = screen.getByText('LAU ORGANIZAÇÃO')
    const description = screen.getByText('Assessoria e Cerimonial')
    const footerDescription = screen.getByText(
      'Copyright © Lau Organização 2023.Suzano, SP.',
    )

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(footerDescription).toBeInTheDocument()

    expect(title).toBeDefined()
    expect(description).toBeDefined()
    expect(footerDescription).toBeDefined()
  })

  it('deve renderizar imagem sem erros', () => {
    render(<Home />)

    const imageElement = screen.getByRole('img')

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toBeDefined()
  })
})
