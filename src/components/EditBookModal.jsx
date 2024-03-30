import React from "react";
import { useState } from "react";
import { editBook } from "../reducers/bookreducer";
import { useDispatch, useSelector } from "react-redux";
import "../styling/EditBookModal.css"

export const EditBookPopUp = (bookId) =>{
    const books = useSelector(state => state.books.find((book => book.bookId === bookId.bookId)))
    const [newTitle,setTitle] = useState("")
    const [newPrice,setPrice] = useState("")
    const [newCategory,setCategory] = useState("")
    const [newDescription,setDescription] = useState("")
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
    const dispatch = useDispatch()
    return (
        <div className="background">
            <div className="container">
                <div className="title">
                    <h1>Edit Book</h1>
                </div>
                <div className="body">
                    
                </div>
                <div className="footer">

                </div>
            </div>
        </div>
    );
}