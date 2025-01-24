import React from 'react'
import { render, screen, act, cleanup } from '@testing-library/react'
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

afterEach(cleanup)

test("display BlogPosts with status 'ok'", async () => {
  jest.spyOn(global, 'fetch')
  .mockImplementation(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({
      ...mockResponse
    })
  }))

  await act(async () => render(<BlogPosts />))

  expect(screen.getByText('This is the title of the Post')).toBeInTheDocument()
  expect(screen.getByText('hello there, this is a post…')).toBeInTheDocument()
})
