import React from 'react'
import './emptycart.css'
import { Link } from 'react-router-dom'
import { GiStraightPipe } from 'react-icons/gi';
import { BsHeart } from 'react-icons/bs';
const EmptyCart = () => {
    return (
        <div>
            <div className='route'>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><GiStraightPipe /></li>
                    <li><Link to="">Cart</Link></li>
                </ol>
            </div>
            <div className='emptycart'>
                 <div className='inner-emptycart'>
                     <div className='empty-cart-heart'>
                        <BsHeart  />
                     </div>
                     <div className='empty-cart-heart-desc'>
                         NO ITEM ITEM FOUND IN CART <br />
                         <Link to="/">Add Items</Link>
                     </div>
                 </div>
            </div>
        </div>

    )
}

export default EmptyCart