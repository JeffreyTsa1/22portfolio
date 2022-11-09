import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/styles.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Navbar */}
        <NavLink to="/"><div><button><a>About</a></button></div></NavLink>
        <NavLink to="/Work"><div><button><a>Work</a></button></div></NavLink>
        <NavLink to="/Contact"><div><button><a>Contact</a></button></div></NavLink>

        
    </div>
  )
}

export default Navbar