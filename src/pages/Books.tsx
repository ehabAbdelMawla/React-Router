import React from 'react';
import { Outlet, Link } from "react-router-dom"


interface Book {
    id: number,
    name: String,
    writer: string
}


const Books = () => {
    const books: Book[] = [
        {
            id: 1,
            name: 'Book A',
            writer: 'A'
        }, {
            id: 2,
            name: 'Book B',
            writer: 'B'
        }, {
            id: 3,
            name: 'Book C',
            writer: 'C'
        }, {
            id: 4,
            name: 'Book D',
            writer: 'D'
        }, {
            id: 5,
            name: 'Book E',
            writer: 'E'
        }
    ]

    return (
        <>
            <h1 className='books'>Books </h1>
            <ul>
                { books.map( book => <li key={ book.id }>
                    <Link to={ `./${ book.id }` }>
                        { book.name }
                    </Link>
                </li> ) }
            </ul>
            <Outlet />
        </>

    );
}

export default Books