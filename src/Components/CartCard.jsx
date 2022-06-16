import React, { useEffect, useState } from 'react';
import './CartCard.css';
import { Col, Row, Button, Image } from 'react-bootstrap';

export default function CartCard({
  item,
  onRemoveFromCartHandler,
  onIncrementCartHandler,
  onDecrementCartHandler,
}) {
  let [buttonActive, setButtonActive] = useState(true);

  useEffect(() => {
    if (item.qty < 1) {
      setButtonActive(false);
    } else {
      setButtonActive(true);
    }
  });
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
        <Col xs={4}>
          <h6 className='cart-card__heading'>{item.name}</h6>
          <Button
            className='d-none d-md-block'
            onClick={() => onRemoveFromCartHandler(item)}
          >
            Remove from Cart
          </Button>
        </Col>
        <Col xs={2}>
          <p>${item.price}</p>
        </Col>
        <Col xs={2}>
          <Button
            disabled={!buttonActive}
            className='btn btn-sm'
            onClick={() => onDecrementCartHandler(item)}
          >
            -
          </Button>
          &nbsp; {item.qty} &nbsp;
          <Button
            className='btn btn-sm'
            onClick={() => onIncrementCartHandler(item)}
          >
            +
          </Button>
        </Col>
        <Col xs={2}>
          <p>${Math.round(item.price * item.qty * 100) / 100}</p>
        </Col>
      </Row>
      <Row>
        <Button
          className='d-md-none d-xs-block'
          onClick={() => onRemoveFromCartHandler(item)}
        >
          Remove from Cart
        </Button>
      </Row>
    </div>
  );
}
