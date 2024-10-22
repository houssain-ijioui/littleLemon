import React from 'react'
import logo from "../Little-Lemon-Logo-circle-white.png"

const Nav = () => {
  return (
    <nav>
        <img style={{width: 100}} src={logo}  alt="" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/policy">Policy</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
    </nav>
  )
}

export default Nav;