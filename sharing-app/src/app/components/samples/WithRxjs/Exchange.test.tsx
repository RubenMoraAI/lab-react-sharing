import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Exchange from './Exchange'

describe('Exchange', () => {
  it('renders VisualComponent with correct title', () => {
    render(<Exchange />)
    expect(screen.getByText('Exchange')).toBeInTheDocument()
  })

  it('renders ExchangeAccount component', () => {
    render(<Exchange />)
    expect(screen.getByText('Exchange account')).toBeInTheDocument()
  })
})
