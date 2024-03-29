import React from 'react'
import { useSelector } from 'react-redux'

export const bookList = () => {
  const books = useSelector(state => state.books)

  const renderedPosts = books.map(book => (
    <article className="book-excerpt" key={book.id}>
      <h3>{book.title}</h3>
      <p className="book-content">{book.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="book-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
