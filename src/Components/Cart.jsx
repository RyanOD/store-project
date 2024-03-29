import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import { Row, Col, Container } from 'react-bootstrap';
import './Cart.css';
import PropTypes from 'prop-types';

export default function Cart({
  cartItems,
  onRemoveFromCartHandler,
  onIncrementCartHandler,
  onDecrementCartHandler,
}) {
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
        <Row className='cart__heading--summary mb-2'>
          <Col xs={5}>
            <h6>Product Details</h6>
          </Col>
          <Col xs={2} className='d-none d-sm-block'>
            <h6>Unit Cost</h6>
          </Col>
          <Col xs={3} className='d-none d-sm-block'>
            <h6>Total Units</h6>
          </Col>
          <Col xs={4} className='d-xs-block d-sm-none'>
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
              onIncrementCartHandler={onIncrementCartHandler}
              onDecrementCartHandler={onDecrementCartHandler}
            />
          );
        })}
      {inCart && (
        <Row className='cart__total pt-4 pb-3'>
          <Col className='cart__heading--total' xs={12}>
            <h5>TOTAL</h5>
            <h5>
              $
              {inCart &&
                cartItems.reduce((prev, curr) => {
                  return prev + Math.round(curr.qty * curr.price * 100) / 100;
                }, 0)}
            </h5>
          </Col>
        </Row>
      )}
    </Container>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  onIncrementCartHandler: PropTypes.func.isRequired,
  onDecrementCartHandler: PropTypes.func.isRequired,
};
