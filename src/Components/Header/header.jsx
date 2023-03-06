import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.css'
import Logo from '../../assets/Header/logo.png'

import { Link, animateScroll as scroll } from "react-scroll";

function OffcanvasExample() {
  const [activeNav, setActiveNav] = useState ('')
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3" fixed='top' >
          <Container fluid>
            <Navbar.Brand href="#home" ><img id='Logo' src={Logo} alt="Logo" /></Navbar.Brand>
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

          
                <Link activeClass="active" to="about_me" spy={true} smooth={false} offset={-130} duration={500}>
                  <Nav.Link id='Nav' onClick={() => setActiveNav('#about_me')} className={activeNav === '#about_me' ? 'active' : ''}>SOBRE MI</Nav.Link>
                </Link>

                <Link activeClass="active" to="skills" spy={true} smooth={false} offset={-130} duration={500}>
                  <Nav.Link id='Nav' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>HABILIDADES</Nav.Link>
                </Link>

                <Link activeClass="active" to="projects" spy={true} smooth={false} offset={-130} duration={500}>
                  <Nav.Link id='Nav' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>PROYECTOS</Nav.Link>
                </Link>

                <Link activeClass="active" to="contact" spy={true} smooth={false} offset={-130} duration={500}>
                  <Nav.Link id='Nav' onClick={() => setActiveNav('#contact')} className={activeNav === 'contact' ? 'active' : ''}>CONTACTO</Nav.Link>
                </Link>

                  
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