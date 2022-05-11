import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src="./image/React-icon.svg.png" alt="" width="150px" className='nav--icon'/>
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar