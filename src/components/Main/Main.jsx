import React, { useEffect, useState } from 'react';
import CtaButton from '../ctaButton/CtaButton';
import DishCard from '../dishCard/DishCard';
import Testimony from '../testimony/Testimony';
import data from '../../data/data';



const Main = () => {

  const [ dishes, setDishes ] = useState(data.dishes);
  const [ testimonials, setTestimonials ] = useState(data.testimonials);


  return (
    <main>
      <h3 id='title'>What sets us apart?</h3>
      <p>It’s our commitment to blending traditional techniques with modern flair. Our chefs take pride in creating dishes that not only satisfy your taste buds but also ignite your senses. From farm-fresh produce to premium cuts of meat, every dish is prepared with love and attention to detail.</p>
      <h3 className='our-specials'>Our Specials</h3>
      <section className="specials">
        {dishes.map((dish, key) => {
          return (<DishCard key={key} title={dish.title} price={dish.price} imageUrl={dish.imageUrl} />)
        })}
      </section>
      <CtaButton text={"Book a table!"} />
      <h3>Our Customers Testimonials</h3>
      <section className='testimonials'>
        {testimonials.map((testimony, key) => {
          return (<Testimony value={testimony.value} opinion={testimony.opinion} name={testimony.name} date={testimony.date} />)
        })}
      </section>
    </main>
  )
}

export default Main;