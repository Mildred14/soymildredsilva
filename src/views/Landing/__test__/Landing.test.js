import React from 'react'
import {render, screen} from '@testing-library/react'
import { Landing } from '../Landing'

test('render Landing', () => {
  render (<Landing />)

  expect(screen.getByText('Transforming ideas')).toBeInTheDocument()
  expect(screen.getByText('Mildred Silva')).toBeInTheDocument()
})