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
            <Nav.Link as={Link} to='/accessories/'>
              Accessories
            </Nav.Link>
            <Nav.Link as={Link} to='/cart/'>
              Cart
            </Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <App />
  </BrowserRouter>
);
