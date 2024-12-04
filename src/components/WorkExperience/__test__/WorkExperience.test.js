import React from 'react'
import { screen, render } from '@testing-library/react'
import { WorkExperience } from "../WorkExperience";

test('should display experiences', () => {
  render(<WorkExperience />)

  const salesloft = screen.getByText("Salesloft")
  const roverpass = screen.getByText("Roverpass")
  const michelada = screen.getByText("michelada.io")
  expect(salesloft).toBeInTheDocument();
  expect(roverpass).toBeInTheDocument();
  expect(michelada).toBeInTheDocument();
})

test('should redirect to Github', () => {
  render(<WorkExperience />)

  const salesloft = screen.getByText("GitHub")
  expect(salesloft).toHaveAttribute('href', 'https://github.com/Mildred14' )
})