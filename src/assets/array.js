import { nanoid } from '@reduxjs/toolkit'

const bookArray = [
    {
        bookId: nanoid(),
        name: '',
        price:'',
        category:'',
        descript:''
    }
];

export default {bookArray};