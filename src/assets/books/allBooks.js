import React from 'react'
import scifiBooks from './scifi.json';
import fantasyBooks from './fantasy.json';
import romanceBooks from './romance.json';
import horrorBooks from './horror.json';
import historyBooks from './history.json';

const allBooks = [
    ...scifiBooks,
    ...fantasyBooks,
    ...romanceBooks,
    ...horrorBooks,
    ...historyBooks
]

export default allBooks
