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
        const namePackage = {id:bookId.bookId,field:'name',value:newTitle}
        dispatch(editBook(namePackage))
    };
    const handlePriceEdit = () =>{
        const pricePackage = {id:bookId.bookId,field:'price',value:newPrice}
        dispatch(editBook(pricePackage))
    };
    const handleCategoryEdit = () =>{
        const categoryPackage = {id:bookId.bookId,field:'category',value:newCategory}
        dispatch(editBook(categoryPackage))
    };
    const handleDescriptionEdit = () =>{
        const descriptPackage = {id:bookId.bookId,field:'descript',value:newDescription}
        dispatch(editBook(descriptPackage))
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
                    <input className="rounded-lg" type="text" placeholder={books.category} value={newCategory} onChange={handleCategoryChange} required/>
                    <input className="rounded-lg" type="text" placeholder={books.descript} value={newDescription} onChange={handleDescriptionChange} required/>
                </div>
                <div className="footer">
                    <button onClick={()=>{handleTitleEdit(),handlePriceEdit(),handleCategoryEdit(),handleDescriptionEdit(),closeModal(false)}}>Save Changes</button>
                </div>
            </div>
        </div>
    );
}