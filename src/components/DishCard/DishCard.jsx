import React from 'react';
import './DishCard.css';
import image from '../../assets/Lime.png'


export default function DishCard() {
  return (
    <article className='card'>
        <img className='dish-image' src={image} alt="Title" />
        <div className='details'>
          <h4>12$</h4>
          <h5>Lasagne Napolitana</h5>
        </div>
    </article>
  )
}
