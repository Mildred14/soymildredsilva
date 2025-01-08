import React from 'react'
import { Alert } from '../Alert'
import { render, screen } from '@testing-library/react'

test('display success Alert', () => {
  render(<Alert msg={"This is a success message"} status='success' />)

  expect(screen.getByText('This is a success message'))
})

test('display error Alert', () => {
  render(<Alert msg={"There was an error"} status='error' />)

  expect(screen.getByText('There was an error'))
})