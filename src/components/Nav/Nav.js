import React from 'react'
import logo from "../../Little-Lemon-Logo-circle-white.png"
import './Nav.css';


const Nav = () => {
  return (
    <nav>
        <img src={logo}  alt="Little Lemon Logo" />
        <ul className='links'>
          <li className='link'><a href="/">Home</a></li>
          <li className='link'><a href="/policy">Policy</a></li>
          <li className='link'><a href="/about">About Us</a></li>
        </ul>
    </nav>
  )
}

export default Nav;