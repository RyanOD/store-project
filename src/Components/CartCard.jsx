import React from 'react';
import './CartCard.css';
import { Col, Row, Button, Image } from 'react-bootstrap';

export default function CartCard({ item, onRemoveFromCartHandler }) {
  return (
    <div className='cart-card'>
      <Row>
        <Col xs={1}>
          <Image
            fluid
            className='cart-card__image'
            src={item.image.v_front}
            alt={item.name}
          />
        </Col>
        <Col xs={5}>
          <h5 className='cart-card__heading'>{item.name}</h5>
          <Button onClick={() => onRemoveFromCartHandler(item)}>
            Remove from Cart
          </Button>
        </Col>
        <Col xs={2}>
          <p>${item.price}</p>
        </Col>
        <Col xs={2}>
          <p>{item.qty}</p>
        </Col>
        <Col xs={2}>
          <p>${Math.round(item.price * item.qty * 100) / 100}</p>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}
