import React from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.css'
import Logo from '../../assets/Header/logo.png'

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img id='Logo' src={Logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link id='Nav'href="#about_me">SOBRE MI</Nav.Link>
                  <Nav.Link id='Nav'href="#skills">HABILIDADES</Nav.Link>
                  <Nav.Link id='Nav'href="#projects">PROYECTOS</Nav.Link>
                  <Nav.Link id='Nav'href="#contact">CONTACTO</Nav.Link>
                  
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;