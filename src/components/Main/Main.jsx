import React, { useEffect } from 'react';
import CtaButton from '../CtaButton/CtaButton';
import DishCard from '../DishCard/DishCard';
import axios from 'axios';
import { useState } from 'react';


const Main = () => {
  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('https://spoonacular.com/food-api');
        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDishes();
  }, [])

  return (
    <main>
      <h3 id='title'>What sets us apart?</h3>
      <p>It’s our commitment to blending traditional techniques with modern flair. Our chefs take pride in creating dishes that not only satisfy your taste buds but also ignite your senses. From farm-fresh produce to premium cuts of meat, every dish is prepared with love and attention to detail.</p>
      <h3>Our Specials</h3>
      <div className="specials">
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
      <CtaButton text={"Book a place!"} />
    </main>
  )
}

export default Main;