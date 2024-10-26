import React, { useEffect } from 'react';
import CtaButton from '../CtaButton/CtaButton';
import DishCard from '../DishCard/DishCard';
import { useState } from 'react';


const Main = () => {

  return (
    <main>
      <h3 id='title'>What sets us apart?</h3>
      <p>It’s our commitment to blending traditional techniques with modern flair. Our chefs take pride in creating dishes that not only satisfy your taste buds but also ignite your senses. From farm-fresh produce to premium cuts of meat, every dish is prepared with love and attention to detail.</p>
      <h3 className='our-specials'>Our Specials</h3>
      <div className="specials">
        <DishCard title={"Lemon Herb Grilled Chicken"} price={"12.99"} imageUrl={"https://images.unsplash.com/photo-1584949602334-4e99f98286a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D"} />
        <DishCard title={"Creamy Lemon Risotto"} price={"15.99"} imageUrl={"https://plus.unsplash.com/premium_photo-1695240028448-9a8bf3e164f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmlzb3R0b3xlbnwwfHwwfHx8MA%3D%3D"} />
        <DishCard title={"Zesty Lemon Shrimp Pasta"} price={"17.99"} imageUrl={"https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WmVzdHklMjBMZW1vbiUyMFNocmltcCUyMFBhc3RhfGVufDB8fDB8fHww"} />
      </div>
      <CtaButton text={"Book a table!"} />
    </main>
  )
}

export default Main;