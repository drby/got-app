import React, { useState } from "react";

//icons
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';

//Bootstrap
import Card from 'react-bootstrap/Card'

const Collapsible = ({ open, children, book }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>

      <Card className="book-card" style={{ width: '18rem' }}>
          <Card.Body as='div' style={{display: "flex", justifyContent: "space-between"}}>
              <Card.Text className='book-text' as="div"><div><GoBook id='book-icon' /> - {book.name} by {book.authors}</div></Card.Text>
              <button type="button" className="btn" onClick={handleFilterOpening}>
                {!isOpen ? (
                  <BsChevronCompactDown />
                ) : (
                  <BsChevronCompactUp />
                )}
              </button>
          </Card.Body>
          <div className="border-bottom">
            <div>{isOpen && <div className="p-3">{children}</div>}</div>
          </div>
      </Card>
    </>
  );
};

export default Collapsible;