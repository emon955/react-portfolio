import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsSearch, BsHeart, BsMinecart } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { BiGitCompare } from 'react-icons/bi';

import "./Navbar.css"
const Navbar = () => {
  const [isMobile, setMobile] = useState(false)
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='row'>
      <div className='logo'>
        <Link to="/"><li><img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" /></li></Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >   <h1 className='close-nav'>hi</h1>
        <Link to="/" className='home item'><li>Home</li></Link>
        <Link to="/about" className='about item'><li>About</li></Link>
        <Link to="/contact" className='contact item'><li>Contact</li></Link>
        <Link to="/skill" className='skill item'><li>Skill</li></Link>
        <Link to="/signup" className='signup item'><li>SignUp</li></Link>
      </ul>
      <div className='nav-right-wrapper'>
        <button className='search-btn'><BsSearch /></button>
        <button className='user-btn'><BiUser /></button>
        <button className='compare-btn'><BiGitCompare /></button>
        <button className='heart-btn'><BsHeart /></button>
        <button className='cart-btn'><BsMinecart /></button>
      </div>
      <button className='mobile-menu-icon'
        onClick={() => setMobile(!isMobile)}
      >
        {isMobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
      </button>
      </div>
    </div>
    </nav>
  )
}

export default Navbar