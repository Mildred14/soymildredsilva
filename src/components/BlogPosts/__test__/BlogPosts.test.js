import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { BlogPosts } from '../BlogPosts'

const mockResponse = {
  "status": "ok",
  "items": [
    {
      guid: 1,
      description: "hello there, this is a post<img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*869jY3gkvlIJ9h89zvik7w.png\">",
      title: "This is the title of the Post"
    }
  ]
}

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    ...mockResponse
  })
}))

test("display BlogPosts with status 'ok'", async () => {
  await act(async () =>  render(<BlogPosts />))

  expect(screen.getByText('This is the title of the Post')).toBeInTheDocument()
  expect(screen.getByText('hello there, this is a post…')).toBeInTheDocument()
})
