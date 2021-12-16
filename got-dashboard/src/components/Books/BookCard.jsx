import React, { useState } from "react";

//components
import Collapsible from "../Collapsible/Collapsible";

//icons
import { CgDetailsMore } from 'react-icons/cg'
import { BsPerson } from 'react-icons/bs'

//css
import './CSS/bookCard.css'

//Bootstrap
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//fetch character method
import { getCharacter } from '../../services'

const BookCard = ({book}) => {

    const [characters, setCharacters] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    
    const handleClick = () => {
        setIsDisabled(true);
        book.characters.map(character => getCharacter(character).then(result => setCharacters(characters => [...characters, result])))
    }

    return(

        <Collapsible book={book}>
                <Card.Body as='div'>
                    <Card.Text className='details-text' as="div"><div><CgDetailsMore id='details-icon' /> Details: </div><div className="details-content">number of pages: {book.numberOfPages}</div><div className="details-content">publisher: {book.publisher}</div><div className="details-content">country: {book.country}</div></Card.Text>
                    <Card.Text className='details-text' as="div">
                        <div className="button-container"><Button onClick={handleClick} disabled={isDisabled}> <BsPerson id='details-icon' /> see characters </Button> </div>
                        <div className="characters-content"></div>
                        <div className="characters-container" style={{display: 'flex', justifyContent: 'space-between', 'flex-wrap': 'wrap'}}>{characters.map(character => <p>{character.name} ● </p>)}</div>
                    </Card.Text>
                </Card.Body> 
        </Collapsible>
    )
}

export default BookCard