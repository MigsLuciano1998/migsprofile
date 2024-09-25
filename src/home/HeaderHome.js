import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function HeaderHome() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed='top'
      className={`header-container ${isScrolled ? 'scrolled' : ''}`}
    >
        <Container className='header-container'>
            <Navbar.Brand href="">MP</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#contact-form">Send message</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default HeaderHome