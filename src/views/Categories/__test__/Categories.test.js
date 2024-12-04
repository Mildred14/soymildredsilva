import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Categories } from '../Categories'

test('display all categories',  () => {
  render(<Categories />)

  expect(screen.getAllByText('Work Experience')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Technology Stack')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Contact')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Curious Facts')[0]).toBeInTheDocument()
  expect(screen.getAllByText('About me')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Reviews')[0]).toBeInTheDocument()
})

test('open Contact modal',  () => {
  render(<Categories />)

  const contact = screen.getAllByTitle('more-info')
  fireEvent.click(contact[2])
  expect(screen.getByTitle('modal-2')).toBeInTheDocument()
  expect(screen.getAllByText('Contact')).toHaveLength(2)
})
