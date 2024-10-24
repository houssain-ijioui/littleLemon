import React from 'react'
import logo from "../../Little-Lemon-Logo-circle-white.png"
import './Nav.css';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <nav>
        <img src={logo}  alt="Little Lemon Logo" />
        <ul className='links'>
          <li className='link'><Link to={"/"}>Home</Link></li>
          <li className='link'><Link to={"/booking"}>Booking</Link></li>
          <li className='link'><Link to={"/policy"}>Policy</Link></li>
          <li className='link' id='about-link'><Link to={"/about"}>About Us</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;