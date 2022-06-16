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
    <>
      {!inCart && (
        <Row>
          <div className='cart'>
            <h3 className='cart__heading'>Your cart is currently empty</h3>
          </div>
        </Row>
      )}

      {inCart && (
        <Row className='cart__heading'>
          <Col xs={6}>
            <h5>Product Details</h5>
          </Col>
          <Col xs={2}>
            <h5>Unit Cost</h5>
          </Col>
          <Col xs={2}>
            <h5>Total Units</h5>
          </Col>
          <Col xs={2}>
            <h5>Subtotal</h5>
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
      <Container>
        <Row className='cart__heading'>
          <Col xs={10}>
            <h5>TOTAL</h5>
          </Col>
          <Col xs={2}>
            <p>
              $
              {inCart &&
                cartItems.reduce((prev, curr) => {
                  return prev + Math.round(curr.qty * curr.price * 100) / 100;
                }, 0)}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
