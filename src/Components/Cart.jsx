import React from 'react';
import CartCard from './CartCard';

export default function Cart({ cartItems }) {
  console.log(`cartItems = ${cartItems}`);
  return (
    <div>
      {cartItems &&
        cartItems.map((item) => {
          return <CartCard item={item} />;
        })}
    </div>
  );
}
