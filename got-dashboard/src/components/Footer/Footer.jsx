import React from 'react';

//Bootstrap
import {Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Made by: <a href="https://www.youtube.com/watch?v=QtBDL8EiNZo">Tom</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer