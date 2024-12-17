import React from 'react'
import { render, screen } from '@testing-library/react'
import { TechnologyStack } from '../TechnologyStack'

test('display TechnologyStack', () => {
  render(<TechnologyStack />)

  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Ruby on Rails')).toBeInTheDocument()
  expect(screen.getByText('Typescript')).toBeInTheDocument()
  expect(screen.getByText('HTML')).toBeInTheDocument()
  expect(screen.getByText('CSS')).toBeInTheDocument()
  expect(screen.getByText('Git')).toBeInTheDocument()
  expect(screen.getByText('Figma')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'email' })).toHaveAttribute('href', 'mailto:mildrednatalys@gmail.com')
})