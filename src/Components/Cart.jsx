import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import { Row } from 'react-bootstrap';
import './Cart.css';

export default function Cart({ cartItems, onRemoveFromCartHandler }) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    cartItems.length > 0 ? setInCart(true) : setInCart(false);
  });

  return (
    <Row>
      {!inCart && (
        <div className='cart'>
          <h3 className='cart__heading'>Your cart is currently empty</h3>
        </div>
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
    </Row>
  );
}
