import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
            <NavLink to='/' className='logo'>FOSSCELL</NavLink>
        <div className='nav-items'>
            <li ><NavLink to='/' className='active1'>HOME</NavLink></li>
            <li><NavLink to='/'>ABOUT US</NavLink></li>
            <li><NavLink to='/'>WHO ARE WE</NavLink></li>
            <li><NavLink to='/'>CONTACT US</NavLink></li>
        </div>
    </div>
  )
}

export default Navbar