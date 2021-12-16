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

    const [characterNames, setCharacterNames] = useState([]);
    
    useEffect(() => {
        //console.log(book.characters[0])
        book.characters.map(character => getCharacter(book.characters[0]).then(result => setCharacterNames([...characterNames, result.name])))
        console.log(characterNames);
    })

    return(

        <Collapsible book={book}>
                <Card.Body as='div'>
                    <Card.Text className='details-text' as="div"><div><CgDetailsMore id='details-icon' /> Details: </div><div className="details-content">number of pages: {book.numberOfPages}</div><div className="details-content">publisher: {book.publisher}</div><div className="details-content">country: {book.country}</div></Card.Text>
                    <Card.Text className='details-text' as="div">
                        <div><BsPerson id='details-icon' /> Characters: </div><div className="characters-content">
                        </div>
                    </Card.Text>
                </Card.Body> 
        </Collapsible>
    )
}

export default BookCard