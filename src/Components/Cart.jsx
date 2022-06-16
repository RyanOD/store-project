import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import { Row, Col, Container } from 'react-bootstrap';
import './Cart.css';

export default function Cart({ cartItems, onRemoveFromCartHandler }) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    cartItems.length > 0 ? setInCart(true) : setInCart(false);
  });

  return (
    <Container>
      {!inCart && (
        <Row>
          <h4 className='cart__heading--empty pt-3 pb-3'>
            Your cart is currently empty
          </h4>
        </Row>
      )}

      {inCart && (
        <Row className='cart__heading--total pt-4 pb-3'>
          <Col xs={10}>
            <h5>
              TOTAL = $
              {inCart &&
                cartItems.reduce((prev, curr) => {
                  return Math.round(prev + curr.qty * curr.price * 100) / 100;
                }, 0)}
            </h5>
          </Col>
          <Col xs={2} className='text-right'>
            <h5>
              $
              {inCart &&
                cartItems.reduce((prev, curr) => {
                  return Math.round(prev + curr.qty * curr.price * 100) / 100;
                }, 0)}
            </h5>
          </Col>
        </Row>
      )}

      {inCart && (
        <Row className='cart__heading--summary mb-2'>
          <Col xs={6}>
            <h6>Product Details</h6>
          </Col>
          <Col xs={2}>
            <h6>Unit Cost</h6>
          </Col>
          <Col xs={2}>
            <h6>Total Units</h6>
          </Col>
          <Col xs={2}>
            <h6>Subtotal</h6>
          </Col>
        </Row>
      )}
      {inCart &&
        cartItems.map((item) => {
          return (
            <CartCard
              key={item.model_number}
              item={item}
              onRemoveFromCartHandler={onRemoveFromCartHandler}
            />
          );
        })}
    </Container>
  );
}
