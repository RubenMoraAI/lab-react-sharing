import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { WithRxjs } from './WithRxjs'

describe('WithRxjs', () => {
  it('renders VisualComponent with correct title and description', () => {
    render(<WithRxjs />)
    expect(screen.getByText('Blockchain')).toBeInTheDocument()
    expect(screen.getByText('Using RxJS to share data, this method relies on external libraries and requires maintaining a separate entity, such as a service, enabling access to data from any part of the code.')).toBeInTheDocument()
  })

  it('renders Exchange and Wallet components', () => {
    render(<WithRxjs />)
    expect(screen.getByText('Exchange')).toBeInTheDocument()
    expect(screen.getByText('Wallet')).toBeInTheDocument()
  })
})
