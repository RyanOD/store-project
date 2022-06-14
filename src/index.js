import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar sticky='top' bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to='/'>
            Guitar Store
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/products/guitars/'>
              Guitars
            </Nav.Link>
            <Nav.Link as={Link} to='/products/effects/'>
              Effects
            </Nav.Link>
            <Nav.Link as={Link} to='/cart/'>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <App />
  </BrowserRouter>
);
