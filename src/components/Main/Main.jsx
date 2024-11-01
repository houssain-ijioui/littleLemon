import React, { useState } from 'react';
import data from '../../data/data';
import './main.css';
import Service from '../service/Service';
import Testimony from '../testimony/Testimony';


const Main = () => {

  const [ services, setServices ] = useState(data.services);
  const [ testimonials, setTestimonials ] = useState(data.testimonials);


  return (
    <main>
      <section className='first-section'>
        <h1>Taste The Essence of Morocco</h1>
        <div className="cards">
          {services.map(service => {
            return (
              <Service imageUrl={service.imageUrl} title={service.title} text={service.text} />
            )
          })}
          <article>
            <h3></h3>
          </article>
        </div>
      </section>
      <section className='testimonies'>
        <h1>Dine Like Royalty in Morocco.</h1>
        <p className='description'>A culinary journey! Little Lemon's exquisite dishes and stunning ambiance made our evening unforgettable. Truly a Moroccan gem.</p>
        <div className="testimonials">
          {testimonials.map(testimony => {
            return (
              <Testimony opinion={testimony.opinion} value={testimony.value} name={testimony.name} imageUrl={testimony.imageUrl} />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Main;