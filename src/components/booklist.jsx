import React from 'react'
import { useSelector } from 'react-redux'

export const BookList = () => {
  const books = useSelector(state => state.books)
  console.log(books);
  const renderedBooks = books.map(book => (
    <article className="book-excerpt" key={book.bookId}>
      <h3>{book.name}</h3>
      <p className="book-content">{book.descript.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="book-list">
      <h2>Book List</h2>
      {renderedBooks}
    </section>
  )
}
