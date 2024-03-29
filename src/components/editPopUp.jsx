import React from 'react'
import bookArray from '../assets/array'
import bookreducer from '../reducers/bookreducer'
import { editBook } from '../reducers/bookreducer'
import { createSlice } from '@reduxjs/toolkit'

const editPopUp = (bookId, editBook) =>{

  // const handleChange = ({editBook}) =>{
  //   dispatch(editBook({id:bookId,field:'title',value:'edit-title'}));
  //   dispatch(editBook({id:bookId,field:"price",value:'edit-price'}));
  //   dispatch(editBook({id:bookId,field:"category",value:'edit-category'}));
  //   dispatch(editBook({id:bookId,field:"description",value:'edit-description'}));
  // }
  return(
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit book</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='title'>
                  <input type='text' id='edit-title' name="title" minLength={5} maxLength={50} onChange={dispatch(editBook({id:bookId,field:'title',value:'edit-title'}))}/>
                </div>
                <div className='price'>
                  <input type='text' id='edit-price' name="price" minLength={5} maxLength={50} onChange={dispatch(editBook({id:bookId,field:"price",value:'edit-price'}))}/>
                </div>
                <div className='category'>
                  <input type='text' id='edit-category' name="category" minLength={5} maxLength={50} onChange={dispatch(editBook({id:bookId,field:"category",value:'edit-category'}))}/>
                </div>
                <div className='discription'>
                  <input type='text' id='edit-description' name="description" minLength={5} maxLength={50} onChange={dispatch(editBook({id:bookId,field:"description",value:'edit-description'}))}/>    
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Done</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default editPopUp