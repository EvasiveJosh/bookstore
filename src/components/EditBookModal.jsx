import React from "react";
import { useState } from "react";
import { editBook } from "../reducers/bookreducer";
import { useDispatch, useSelector } from "react-redux";
import "../styling/EditBookModal.css"

export const EditBookPopUp = (bookId) =>{
    const books = useSelector(state => state.books.find(book => book.bookId === props.bookId))
    const [newTitle,setTitle] = useState("")
    const [newPrice,setPrice] = useState("")
    const [newCategory,setCategory] = useState("")
    const [newDescription,setDescription] = useState("")
    console.log(descript)

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
    const changes = {id:bookId,name:newTitle,price:newPrice,category:newCategory,descript:newDescription}
    return (
        <h1>hello</h1>
    );
}