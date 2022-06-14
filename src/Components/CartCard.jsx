import React from 'react';
import './CartCard.css';

export default function CartCard({ item }) {
  return (
    <div className='cart-card'>
      <img
        className='cart-card__image'
        src={item[0].data().image.h_front}
        alt={item[0].data().name}
      />
      <p>{item[0].data().name}</p>
      <p>{item[0].data().price}</p>
    </div>
  );
}
