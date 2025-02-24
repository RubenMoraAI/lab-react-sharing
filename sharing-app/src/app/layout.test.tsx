import { render, screen } from '@testing-library/react'
import RootLayout from './layout'

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="head">{children}</div>
}))

jest.mock('./components/layout/Navbar', () => {
  const Navbar = () => <div>Navbar</div>
  Navbar.displayName = 'Navbar'
  return Navbar
})
jest.mock('./components/layout/SharingSelector', () => {
  const SharingSelector = () => <div>SharingSelector</div>
  SharingSelector.displayName = 'SharingSelector'
  return SharingSelector
})

jest.mock('react', () => {
  const originalReact = jest.requireActual('react')
  return {
    ...originalReact,
    createElement: (type: any, props: any, ...children: any[]) => {
      if (type === 'html' || type === 'body') {
        return originalReact.createElement(
          'div',
          {
            ...props,
            'data-testid': `mock-${type}`
          },
          ...children
        )
      }
      return originalReact.createElement(type, props, ...children)
    }
  }
})

describe('RootLayout Component', () => {
  it('renders metadata correctly in the Head', () => {
    render(<RootLayout>Test</RootLayout>)

    const head = screen.getByTestId('head')

    const title = head.querySelector('title')
    expect(title).toHaveTextContent('React.js Sharing Data Lab - Testing and Solutions')

    const metaDescription = head.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute(
      'content',
      'Explore a React.js and Next.js lab demonstrating common data sharing problems and their solutions. Perfect for frontend developers working with TypeScript, HTML, CSS, and JavaScript.'
    )

    const viewportMeta = head.querySelector('meta[name="viewport"]')
    expect(viewportMeta).toHaveAttribute('content', 'width=device-width, initial-scale=1.0')
  })

  it('renders Navbar and SharingSelector', () => {
    render(<RootLayout>Test</RootLayout>)

    expect(screen.getByText('Navbar')).toBeInTheDocument()
    expect(screen.getByText('SharingSelector')).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Test</div>
      </RootLayout>
    )

    expect(screen.getByTestId('test-child')).toBeInTheDocument()
  })
})
