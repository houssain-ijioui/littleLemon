import React from 'react'
import Nav from '../../components/Nav/Nav';
import Footer from "../../components/Footer/Footer";
import './About.css';


function About() {
  return (
    <>
      <Nav />
      <div className="about-content">
        <h1>About Little Lemon</h1>
        <p>At Little Lemon, we believe in bringing the zest of freshness and flavor to your table. We are a passionate team of food lovers dedicated to creating mouth-watering dishes that are both healthy and delicious. Our goal is to serve up meals that nourish the body while delighting the senses.
        Whether you're looking for a refreshing salad, a zesty main course, or a sweet treat with a citrus twist, Little Lemon offers a range of hand-crafted recipes made from the freshest ingredients. We take pride in offering dishes that reflect our love for vibrant, wholesome food.
        Come join us on a culinary adventure where every meal is packed with a burst of flavor — just like a squeeze of lemon!</p>
      </div>
      <Footer />
    </>
  )
}

export default About
