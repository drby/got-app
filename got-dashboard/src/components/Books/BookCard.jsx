import React, { useEffect, useState } from "react";

//components
import Collapsible from "../Collapsible/Collapsible";

//icons
import { CgDetailsMore } from 'react-icons/cg'
import { BsPerson } from 'react-icons/bs'

//css
import './CSS/bookCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'

//fetch character method
import { getCharacter } from '../../services'

const BookCard = ({book}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        book.characters.forEach(character => {
            getCharacter(character).then( result => console.log(result))
        })
    },[])

    console.log(characters);

    return(

        <Collapsible book={book}>
                <Card.Body as='div'>
                    <Card.Text className='details-text' as="div"><div><CgDetailsMore id='details-icon' /> Details: </div><div className="details-content">number of pages: {book.numberOfPages}</div><div className="details-content">publisher: {book.publisher}</div><div className="details-content">country: {book.country}</div></Card.Text>
                    <Card.Text className='details-text' as="div">
                        <div><BsPerson id='details-icon' /> Characters: </div><div className="characters-content">
                            {book.characters.map((character, index) =>
                                <div key={index}>{character}</div>
                            )}
                        </div>
                    </Card.Text>
                </Card.Body> 
        </Collapsible>
    )
}

export default BookCard