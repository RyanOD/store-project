import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import { Button, Row, Col } from 'react-bootstrap';
import Cart from './Cart';

export default function Product({
  data,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  cartItems,
}) {
  let { modelNumber } = useParams();
  // const [cartCount, setCartCount] = useState(0);
  // let inCart = false;

  // if (cartItems) {
  //   inCart = cartItems.find(
  //     (product) => product.model_number === parseInt(modelNumber)
  //   );
  // }

  // useEffect(() => {
  //   if (product[0].data().model_number === parseInt(modelNumber)) {
  //     setCartCount((prevCount) => prevCount + 1);
  //   }
  // }, []);

  let product = data.filter(
    (productData) => productData.data().model_number === parseInt(modelNumber)
  );

  return (
    <div>
      <h1>{product[0].data().name}</h1>
      <p>Model #: {product[0].data().model_number}</p>
      <Row>
        <Col sm={4} md={8} className='product-hero'>
          <img
            className='product-hero__image--h'
            src={product[0].data().image.h_front}
            alt=''
          />
        </Col>
        <div className='col product-hero__cta'>
          <h4>${product[0].data().price}</h4>
          <Button
            className='product-hero__link'
            onClick={() => onAddToCartHandler(product)}
          >
            Add to cart
          </Button>
        </div>
      </Row>
      <div className='row'>
        <h3>Overview</h3>
        {product[0].data().description.map((description) => {
          return <p>{description}</p>;
        })}
        <h3>Features</h3>
        <ul>
          {Array.from(product[0].data().features).map((feature) => {
            return <li>{feature}</li>;
          })}
        </ul>
      </div>
      <Cart />
    </div>
  );
}
