import React from 'react';

//components
import BookCard from './BookCard'

//CSS
import './CSS/books.css'

const Books = ({books}) => {

    return(
        <>
            <h2>All books</h2>
            <div className="book-card-container">
                {
                    books.map((book, index) => 
                        <BookCard key={index} book={book}/>
                    )
                }
            </div>
        </>
        
    )
}

export default Books