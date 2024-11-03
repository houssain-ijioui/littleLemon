import React, { useEffect, useState } from 'react'
import './nav.css';
import { Link } from 'react-router-dom';



const Nav = () => {
  const [ showToggle, setShowToggle ] = useState(false);

  const toggleMenu = () => { setShowToggle(!showToggle) }


  return (
    <nav>
      <Link to={"/"}><h2 id='logo'>Little Lemon</h2></Link>
      <button onClick={toggleMenu} id='toggle-menu'>☰</button>
      <ul className={`links ${showToggle ? 'open-toggle': 'close-toggle'}`} >
        <li className='link'><Link to={"/"}>Home</Link></li>
        <li className='link'><Link to={"/booking"}>Booking</Link></li>
        <li className='link'><Link to={"/policy"}>Policy</Link></li>
        <li className='link' id='about-link'><Link to={"/faq"}>FAQ</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;