import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { BsSearch, BsHeart } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { GoThreeBars } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import { MdMinimize } from 'react-icons/md';
import { CartState } from '../Shopping cart/context/Context'
import Cart from '../Cart/Cart';
import "./Navbar.css"
const Navbar = () => {
  const {
    state: { cart },
    whilliststate: { whillist },
    dispatch,
    Comparestate: { compare },
    // productDispatch,
  } = CartState()
  const [isMobile, setMobile] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [whillists, setwhillist] = useState(false)
  const [user, setUser] = useState(false)
  const dropdownHandler = () => {
    setUser(!user);
  };
  const handleClick = () => {
    setToggle(!toggle);
    // setwhillist(!whillists);
    // setToggle(!toggle);
  };
  const handleClickwhillist = () => {
    setwhillist(!whillists);
    // setToggle(!toggle);
    // setwhillist(!whillists);
  };
  const [sticky, setSticky] = useState("");
  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };
  const classes = `${sticky}`;
  const inputDefault = () => {
    return false
  };
  return (
    <header className={classes}>
      <div className='nav-container'>
        <div className='nav-row'>
          <div className='logo'>
            <Link to="/"><li><img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" /></li></Link>
          </div>
          <div className={isMobile ? "nav-links-mobile" : "nav-links"}
          >
            <div className='nav-row'>
              <div>
                <button onClick={() => setMobile(false)} className="nav-close-btn">
                  <IoMdClose />
                </button>
              </div>
              <div className='nav-links-items'>
                <div className='mobile-searc-area'>
                  <form >
                    <input onClick={inputDefault} placeholder="search" />
                    <button><BiSearch /></button>
                  </form>
                </div>
                <ul className='nav-ul'>
                  <li > <Link to="/" className=' item'>home</Link></li>
                  <li> <Link to="/shop" className=' item'>shop</Link></li>
                  <li>
                    <Link to="/shop" className='contact item'>collection</Link>
                  </li>
                  <li> <Link to="/blogpage" className='skill item'>blog</Link></li>
                  <li> <Link to="/contactform" className='sign item'>contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='nav-right-wrapper'>
            <button className='search-btn'><BsSearch /></button>
            <button className='user-btn'
            onClick={dropdownHandler}
            ><BiUser /></button>
            <button className='compare-btn'><Link to="/compare" className='compare-btn-link'><span className='count'>{compare.length > 0 ? compare.length : 0}</span><BiGitCompare /></Link></button>
            <button className='heart-btn'><Link to="/wishlist" className='heart-btn-link'><BsHeart /> <span className='count'>{whillist.length > 0 ? whillist.length : 0}</span></Link></button>
            <button onClick={handleClick} className='cart-btn'><BsCart2 /><span className='count'>{cart.length > 0 ? cart.length : 0}</span></button>
          </div>
          <div className='user-dropdown' style={{ display: user ? 'block' : 'none' }}>
            <ul>
              <li><Link to="login">Login</Link></li>
              <li><Link to="register">Register</Link></li>
              <li><Link to="accountInformation">My Account</Link></li>
            </ul>
          </div>
          <div className='shopping-cart' style={{ display: toggle ? 'block' : 'none' }}>
            {cart.length > 0 ? (
              <div className='cart-addded-item'>
                <ul >
                  {cart.map((prod) => (
                    <li key={prod.id}>
                      <div className='product-img'>
                        <img src={prod.img} />
                      </div>
                      <div className='product-title'>
                        {prod.title}
                      </div>
                      <div>
                        <button onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        } className='product-delete'><RxCross2 /></button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='shopping-cart-btn'>
                  <Link onClick={handleClick} to="/cart">View Cart</Link>
                </div>
              </div>
            ) : (
              <span className='no-item'>No item added to cart</span>
            )}
          </div>
          <div className='shopping-cart' style={{ display: whillists ? 'block' : 'none' }}>
            {whillist.length > 0 ? (
              <div className='cart-addded-item'>
                <ul >
                  {whillist.map((prod) => (
                    <li key={prod.id}>
                      <div className='product-img'>
                        <img src={prod.img} />
                      </div>
                      <div className='product-title'>
                        {prod.title}
                      </div>
                      <div>
                        <button onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        } className='product-delete'><RxCross2 /></button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='shopping-cart-btn'>
                  <Link onClick={handleClick} to="/wishlist">View whillist</Link>
                </div>
              </div>
            ) : (
              <span className='no-item'>No item added to whillist</span>
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