import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Container>
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
    </Container>

    <App />

    <footer className='footer'>
      <Container>
        <Row>
          <Col xs={5}>
            <h4>Contact Us</h4>
            <address>
              <p>1234 Anywhere</p>
              <p>Anytown, USA 12345</p>
              <p>(234)344-4747</p>
            </address>
          </Col>
          <Col xs={5}>
            <h4>Links</h4>
            <p>Guitars</p>
            <p>Effects</p>
          </Col>
          <Col>
            <p>Copyright 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  </BrowserRouter>
);
