import React from 'react';

//assets
import Logo from '../../assets/logo6.png'

//Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

//css 
import './header.css'

const Header = () => {
  return(
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          GOT
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header