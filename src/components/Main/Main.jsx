import React, { useEffect } from 'react';
import CtaButton from '../ctaButton/CtaButton';
import DishCard from '../dishCard/DishCard';
import Testimony from '../testimony/Testimony';


const Main = () => {

  return (
    <main>
      <h3 id='title'>What sets us apart?</h3>
      <p>It’s our commitment to blending traditional techniques with modern flair. Our chefs take pride in creating dishes that not only satisfy your taste buds but also ignite your senses. From farm-fresh produce to premium cuts of meat, every dish is prepared with love and attention to detail.</p>
      <h3 className='our-specials'>Our Specials</h3>
      <section className="specials">
        <DishCard title={"Lemon Herb Grilled Chicken"} price={"12.99"} imageUrl={"https://images.unsplash.com/photo-1584949602334-4e99f98286a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D"} />
        <DishCard title={"Creamy Lemon Risotto"} price={"15.99"} imageUrl={"https://plus.unsplash.com/premium_photo-1695240028448-9a8bf3e164f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmlzb3R0b3xlbnwwfHwwfHx8MA%3D%3D"} />
        <DishCard title={"Zesty Lemon Shrimp Pasta"} price={"17.99"} imageUrl={"https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WmVzdHklMjBMZW1vbiUyMFNocmltcCUyMFBhc3RhfGVufDB8fDB8fHww"} />
      </section>
      <CtaButton text={"Book a table!"} />
      <h3>Our Customers Testimonials</h3>
      <section className='testimonials'>
        <Testimony value={3.5} opinion={"Little Lemon has transformed the way I think about cooking! The recipes are easy to follow, and the flavors are out of this world. I love how diverse the menu is. Highly recommend!"} name={"Sarah Johnson"} date={"12-09-2024"} />
        <Testimony value={4} opinion={"I tried the Little Lemon app for the first time last week, and I was blown away! The dishes are not only delicious but also healthy. It's now my go-to for meal inspiration!"} name={"Michael Thompson"} date={"22-11-2024"} />
        <Testimony value={5} opinion={"As someone who struggles with meal planning, Little Lemon has been a lifesaver! The app is user-friendly, and I appreciate the variety of dishes. My family loves every meal I've made!"} name={"Emily Davis"} date={"30-05-2024"} />
        <Testimony value={4.7} opinion={"I never thought I could cook so well until I started using Little Lemon. The step-by-step instructions make everything easy, and my friends are always impressed with the meals I prepare. Thank you for this fantastic app"} name={"James Smith"} date={"27-12-2024"} />
      </section>

    </main>
  )
}

export default Main;