// in questo file testeremo il comportamento di PostList.jsx

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PostList from '../components/PostList'

describe('Tests the initial mounting of the component', () => {
  it('checks title and input field', () => {
    render(<PostList />)
    const title = screen.getByText(/lista post/i)
    const input = screen.getByPlaceholderText(/cerca post/i)
    expect(title).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
})

describe('Tests the useEffect and what brings to the page', () => {
  it('checks that immedately after first render no list elements are present', () => {
    render(<PostList />)
    const listItems = screen.queryAllByTestId('elemento lista') // me ne aspetto ZERO
    expect(listItems).toHaveLength(0)
    // prima dell'effetto del componente (prima della getPosts())
    // lo stato è composto da un array vuoto e quindi elementi di lista
    // ancora non ce ne sono!
  })

  it('waits for the fetch to finish to count the list items', () => {
    render(<PostList />)
    return screen
      .findAllByTestId('elemento lista')
      .then((elementi) => {
        console.log(elementi.length)
        // expect(elementi).toHaveLength(9) // <-- errore, sono 10
        expect(elementi).toHaveLength(10)
      })
      .catch((err) => {
        console.log('ERRORE NELLA FINDALLBY', err)
        throw new Error()
      })
    // OPPURE APPROCCIO ASYNC/AWAIT
    // const elementi = await screen.findAllByTestId('elemento lista')
    // expect(elementi).toHaveLength(10)
  })
})
