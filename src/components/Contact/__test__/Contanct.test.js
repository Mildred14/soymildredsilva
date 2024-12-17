import React from 'react'
import { render, screen } from '@testing-library/react'
import { Contact } from '../Contact'

test('display Contact', () => {
  render(<Contact />)

  expect(screen.getByText('Email'))
  expect(screen.getByText('hello@soymildredsilva.com'))
  expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', 'https://www.instagram.com/soymildredsilva')
})