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
    // this is how you access the guitar entry in Firebase //

    let exists = cartItems.find(
      (inCart) => inCart.model_number === product[0].data().model_number
    );

    if (exists) {
      setCartItems(
        cartItems.map((item) => {
          return item.model_number === product[0].data().model_number
            ? { ...exists, qty: exists.qty + 1 }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product[0].data(), qty: 1 }]);
    }
  };

  const onRemoveFromCartHandler = (product) => {
    setCartItems(
      cartItems.filter((item) => item.model_number !== product.model_number)
    );
  };

  return (
    <Container>
      {guitarDataLoaded && effectsDataLoaded && (
        <Routes>
          <Route path='/' element={<Home data={guitarData} />}></Route>
          <Route
            path='/products/guitars/'
            element={
              <Products collectionName='guitars' cartItems={cartItems} />
            }
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
                cartItems={cartItems}
              />
            }
          ></Route>
          <Route
            path='/cart/'
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
              />
            }
          ></Route>
        </Routes>
      )}
    </Container>
  );
}
