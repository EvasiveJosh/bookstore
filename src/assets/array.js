import { nanoid } from '@reduxjs/toolkit'

const bookArray = [
    {
        bookId: nanoid(),
        name: 'Harry Potter',
        price:'',
        category:'horror',
        descript:''
    },
    {
        bookId: nanoid(),
        name: 'Robinson Crusoe',
        price: '',
        category:'fiction',
        descript:''
    }
];

export default bookArray;