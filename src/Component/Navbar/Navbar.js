import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsSearch, BsHeart } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { BiGitCompare } from 'react-icons/bi';
import { GoThreeBars } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { CartState } from '../Shopping cart/context/Context'
import {
  Badge,
  Dropdown,
  Button
} from "react-bootstrap";
import "./Navbar.css"
const Navbar = () => {
  const {
    state: { cart },
    dispatch,
    // productDispatch,
  } = CartState()
  const [isMobile, setMobile] = useState(false)
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <header>
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
            <button className='compare-btn'><BiGitCompare /><span className='count'>0</span></button>
            <button className='heart-btn'><BsHeart /><span className='count'>0</span></button>
            <button onClick={handleClick} className='cart-btn'><BsCart2 /><span className='count'>{cart.length > 0? cart.length : 0}</span></button>
          </div>
          <div className='shopping-cart' style={{ display: toggle ? 'block' : 'none' }}>
            {cart.length > 0 ? (
              <div className='cart-addded-item'>
                  <ul >
                      {cart.map((prod)=>(
                        <li>
                            <div className='product-img'>
                                <img src={prod.img} />
                            </div>
                            <div className='product-title'>
                                {prod.title}
                            </div>
                            <div className='product-delete'>
                                <RxCross2 />
                            </div>
                        </li>
                      ))}
                  </ul>
              </div>
            ) : (
              <span className='no-item'>No item added to cart</span>
            )}
             
          </div>
          <div className='mobile-menu-icon'>
            <GoThreeBars onClick={() => setMobile(true)} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar