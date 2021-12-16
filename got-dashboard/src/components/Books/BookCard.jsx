import React from "react";

//components
import Collapsible from "../Collapsible/Collapsible";

//icons
import { GoBook } from 'react-icons/go';

//css
import './CSS/bookCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const BookCard = ({book}) => {
    return(

        <Collapsible book={book}>
        <h1>hey</h1>
            {/* <Card className="book-card" style={{ width: '18rem' }}>
                <Card.Body as='div' style={{display: "flex", justifyContent: "space-between"}}>
                    <Card.Text className='book-text' as="div"><div><GoBook id='book-icon' /> - {book.name} by {book.authors}</div></Card.Text>
                    <DropdownButton variant="secondary" size="sm">
                        <Dropdown.Item as='div'>
                            <Card className="book-card" style={{ width: '18rem' }}>
                                <Card.Text className='book-text' as="div"><div>Details: {book.numberOfPages} pages, publisher: {book.publisher}, country: {book.country}</div></Card.Text>
                            </Card>
                        </Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card> */}
        </Collapsible>
    )
}

export default BookCard