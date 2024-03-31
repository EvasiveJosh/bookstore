import { nanoid } from '@reduxjs/toolkit'

const bookArray = [
    {
        bookId: nanoid(),
        name: 'Harry Potter',
        price:'5.66',
        category:'horror',
        descript:'kid gets wizard'
    },
    {
        bookId: nanoid(),
        name: 'Robinson Crusoe',
        price: '10.99',
        category:'fiction',
        descript:'A man is stranded on an Island and has to live there for years until he is rescued'
    }
];

export default bookArray;