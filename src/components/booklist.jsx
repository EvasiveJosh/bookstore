import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styling/BookList.css'
import { removeBook } from '../reducers/bookreducer'
import { EditBookPopUp } from './EditBookModal'
import { useState } from 'react'

export const BookList = () => {
  const books = useSelector(state => state.books)
  
  const dispatch = useDispatch()
  const [selectedBook, setSelectedBook] = useState();
  const [openEditModal,setEditModal] = useState(false);
  const renderedBooks = books.map(book => (
    <div className='book'>
      <button className="book-excerpt" key={book.bookId} onClick={() => {setSelectedBook(book.bookId),setEditModal(true)}}>
        <h3>Title: {book.name}</h3>
        <p className='book-price'>Price: {book.price}</p>
        <p className='book-category'>Category: {book.category}</p>
        <p className="book-content">Description: {book.descript.substring(0, 500)}</p>
      </button>
      <div className='delete'>
        <button className='delete-button' onClick={() =>{dispatch(removeBook(book))}}>
          delete book "{book.name}"
        </button>
      </div>
    </div>
  ))
  return (
    <section className="booklist">
      <h2>Book List</h2>
      {renderedBooks} 
      {openEditModal && <EditBookPopUp bookId={selectedBook} closeModal={() => setEditModal(false)} />}
    </section>
  )
}