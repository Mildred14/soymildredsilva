import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Categories } from '../Categories'

test('display all categories',  () => {
  render(<Categories />)

  expect(screen.getAllByText('Work Experience')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Technology Stack')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Contact')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Blog Posts')[0]).toBeInTheDocument()
  expect(screen.getAllByText('About me')[0]).toBeInTheDocument()
  expect(screen.getAllByText('Testimonials')[0]).toBeInTheDocument()
})

test('open Contact modal',  () => {
  render(<Categories />)

  const contact = screen.getAllByText('Contact')
  fireEvent.click(contact[0])
  expect(screen.getAllByText('Contact')).toHaveLength(2)
})
