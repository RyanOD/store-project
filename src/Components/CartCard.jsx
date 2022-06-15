import React from 'react';
import './CartCard.css';
import { Col, Row, Button, Image } from 'react-bootstrap';

export default function CartCard({ item, onRemoveFromCartHandler }) {
  return (
    <div className='cart-card'>
      <Row>
        <Col>
          <h3 className='cart-card__heading'>
            {item.name} ({item.qty})
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} md={6} className='cart-card'>
          <Image
            fluid
            className='cart-card__image'
            src={item.image.h_front}
            alt={item.name}
          />
        </Col>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 2 }}>
          <p>Unit Cost = ${item.price}</p>
          <p>Total Units = {item.qty}</p>
          <p>Total Cost = ${Math.round(item.price * item.qty * 100) / 100}</p>
          <Button onClick={() => onRemoveFromCartHandler(item)}>
            Remove from Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
}
