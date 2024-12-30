import React from 'react'
import { render, screen } from '@testing-library/react'
import { Contact } from '../Contact'

test('display Contact', () => {
  render(<Contact />)

  expect(screen.getByText('Name:'))
  expect(screen.getByText('Email:'))
  expect(screen.getByText('Message:'))
})