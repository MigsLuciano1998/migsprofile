import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

function HeaderHome() {
  return (
    <Navbar expand="lg" fixed='top'>
        <Container className='header-container'>
            <Navbar.Brand href="#">MP</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#projects">Go to Projects</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default HeaderHome