import React from "react";

//icons
import { GoBook } from 'react-icons/go';
import { GiConverseShoe } from 'react-icons/gi';

//css
import './CSS/bookCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

const BookCard = ({book}) => {
    return(
        <Card className="book-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text className='book-text' as="div"><div><GoBook id='book-icon' /> - {book.name} - <GiConverseShoe /></div></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard