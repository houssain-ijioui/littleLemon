import React, { useState } from 'react';
import data from '../../data/data';
import './main.css';



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
              <article>
                <img src={service.imageUrl} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            )
          })}
          <article>
            <h3></h3>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main;