import React from 'react'
import { render, screen } from '@testing-library/react'
import { Testimonials } from '../Testimonials'

test('Testimonial', () => {
  render(<Testimonials />)
  const firstTestimonial = screen.getByTestId('testimonial-0')

  expect(screen.getByText('Naomi Pohl')).toBeInTheDocument()
  expect(screen.getByText('Wade Hundley')).toBeInTheDocument()
  expect(screen.getByText('David Colin')).toBeInTheDocument()
  expect(screen.getByText('Cesar Sanabria')).toBeInTheDocument()
  expect(screen.getByText('Mieko Watanabe')).toBeInTheDocument()
  expect(firstTestimonial.textContent).toContain('...')
})
