import React from "react";
import { useState } from "react";
import { editBook } from "../reducers/bookreducer";
import { useDispatch, useSelector } from "react-redux";
import "../styling/EditBookModal.css"

export const EditBookPopUp = (bookId,{closeModal}) =>{
    const books = useSelector(state => state.books.find((book => book.bookId === bookId.bookId)))
    const [newTitle,setTitle] = useState(books.name)
    const [newPrice,setPrice] = useState(books.price)
    const [newCategory,setCategory] = useState(books.category)
    const [newDescription,setDescription] = useState(books.descript)
    const handleTitleChange = (e) =>{
        setTitle(e.target.value);
    };
    const handlePriceChange = (e) =>{
        setPrice(e.target.value);
    };
    const handleCategoryChange = (e) =>{
        setCategory(e.target.value);
    };
    const handleDescriptionChange = (e) =>{
        setDescription(e.target.value);
    };
    const handleTitleEdit = () =>{
        dispatch(editBook(books.bookId,'name',newTitle))
    };
    const handlePriceEdit = () =>{
        dispatch(editBook(books.bookId,'price',newPrice))
    };
    const handleCategoryEdit = () =>{
        dispatch(editBook(books.bookId,'category',newCategory))
    };
    const handleDescriptionEdit = () =>{
        dispatch(editBook(books.bookId,'descript',newDescription))
    };
    
    const dispatch = useDispatch()
    return (
        <div className="background">
            <div className="container">
                <div className="title">
                    <h1>Edit Book</h1>
                </div>
                <div className="body">
                    <input className="rounded-lg" type="text" placeholder={books.name} value={newTitle} onChange={handleTitleChange} required/>
                    <input className="rounded-lg" type="text" placeholder={books.price} value={newPrice} onChange={handlePriceChange} required/>
                    <input className="rounded-lg" type="text" placeholder={books.category} value={newTitle} onChange={handleCategoryChange} required/>
                    <input className="rounded-lg" type="text" placeholder={books.descript} value={newDescription} onChange={handleDescriptionChange} required/>
                </div>
                <div className="footer">
                    <button onClick={()=>{handleTitleEdit(),handlePriceEdit(),handleCategoryEdit(),handleDescriptionEdit()}}>Save Changes</button>
                    <button onClick={()=>{closeModal(false)}}>Close</button>
                </div>
            </div>
        </div>
    );
}