import React from 'react';
import './CartCard.css';

export default function CartCard({ item }) {
  return (
    <div className='cart-card'>
      <h3>
        {item.name} ({item.qty})
      </h3>
      <img
        className='cart-card__image'
        src={item.image.h_front}
        alt={item.name}
      />

      <p>Unit Cost = ${item.price}</p>
      <p>Total Units = {item.qty}</p>
      <p>Total Cost = ${Math.round(item.price * item.qty * 100) / 100}</p>
    </div>
  );
}
