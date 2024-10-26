import React from 'react';
import './DishCard.css';


export default function DishCard({ title, price, imageUrl }) {
  return (
    <article className='card'>
        <img className='dish-image' src={imageUrl} alt={title} />
        <div className='details'>
          <h4>{price}$</h4>
          <h5>{title}</h5>
        </div>
    </article>
  )
}
