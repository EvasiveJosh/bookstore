import React from "react";
import { useState } from "react";
import { createBook } from "../reducers/bookreducer";
import { useDispatch } from "react-redux";
import "../styling/AddBookModal.css"
import { nanoid } from "@reduxjs/toolkit";

export const AddBookPopUp = ({closeAddBook}) =>{
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
    const saveBook = () =>{
        dispatch(createBook(newBook))
    }
    const dispatch = useDispatch()  
    const newBook = {bookId:nanoid(),name:newTitle,price:newPrice,category:newCategory,descript:newDescription}
    return (
        <div className="background">
            <div className="container">
                <div className="title">
                    <h1>Add Book Details</h1>
                </div>
                <div className="body">
                    
                    <div className="title-input">
                        <input className="rounded-lg" type="text" placeholder="title" value={newTitle} onChange={handleTitleChange} required/>
                    </div>
                    
                    <div className="price input">
                        <input className="rounded-lg" type="number" placeholder="price" value={newPrice} onChange={handlePriceChange} required/>
                    </div>
                    
                    <div className="category-input">
                        <input className="rounded-lg" type="text" placeholder="category" value={newCategory} onChange={handleCategoryChange} required/>
                    </div>
                    
                    <div className="description input">
                        <input className="rounded-lg" type="text" placeholder="description" value={newDescription} onChange={handleDescriptionChange} required/>
                    </div>
                    
                </div>
                <div className="footer">
                    <div className="save-button">
                        <button className="saveButton" onClick={() => {saveBook(),closeAddBook(false)}}>Save Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
}