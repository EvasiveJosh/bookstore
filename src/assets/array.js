import { nanoid } from '@reduxjs/toolkit'

const bookArray = [
    {
        bookId: nanoid(),
        name: 'Harry Potter',
        price:'',
        category:'',
        descript:''
    },
    {
        bookId: nanoid(),
        name: 'Robinson Crusoe',
        price: '',
        category:'',
        descript:''
    }
];

export default bookArray;