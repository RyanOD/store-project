import React, { useState, useEffect } from 'react';
import './App.css';
import './App.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { collection, getDocs } from 'firebase/firestore';
import db from './_db/db';

export default function App() {
  const [guitarData, setGuitarData] = useState([]);
  const [guitarDataLoaded, setGuitarDataLoaded] = useState(false);
  const [effectsData, setEffectsData] = useState([]);
  const [effectsDataLoaded, setEffectsDataLoaded] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const guitars = await getDocs(collection(db, 'guitars'));
      setGuitarData(guitars.docs);
      setGuitarDataLoaded(true);

      const effects = await getDocs(collection(db, 'effects'));
      setEffectsData(effects.docs);
      setEffectsDataLoaded(true);
    };

    getData();
  }, []);

  const onAddToCartHandler = (product) => {
    setCartItems((prevState) => [...prevState, product]);
    console.log(cartItems);
  };

  const onRemoveFromCartHandler = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <Container fluid>
      {guitarDataLoaded && effectsDataLoaded && (
        <Routes>
          <Route path='/' element={<Home data={guitarData} />}></Route>
          <Route
            path='/products/guitars/'
            element={<Products collectionName='guitars' />}
          ></Route>
          <Route
            path='/products/guitars/:modelNumber/'
            element={
              <Product
                data={guitarData}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                cartItems={cartItems}
              />
            }
          ></Route>
          <Route
            path='/products/effects/'
            element={<Products collectionName='effects' />}
          ></Route>
          <Route
            path='/products/effects/:modelNumber/'
            element={
              <Product
                data={effectsData}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
              />
            }
          ></Route>
          <Route path='/cart/' element={<Cart cartItems={cartItems} />}></Route>
        </Routes>
      )}
      <footer className='footer'>
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
      </footer>
    </Container>
  );
}
