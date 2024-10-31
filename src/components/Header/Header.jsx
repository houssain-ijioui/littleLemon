import React from 'react';
import './header.css';
import CtaButton from '../ctaButton/CtaButton';



const Header = () => {
  return (
    <header>
      <div className="overlay"></div>
      <h1>Unforgettable Moroccan Culinary Experience</h1>
      <p>Dive into a world of exquisite flavors and elevate your senses with our Moroccan culinary delights at Little Lemon.</p>
      <CtaButton text={"Reserve Your Place Now!"} />
    </header>
  )
}

export default Header