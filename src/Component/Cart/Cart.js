import React from 'react'
import "./shopcart.css"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { GiStraightPipe } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { CartState } from '../Shopping cart/context/Context';
import EmptyCart from './EmptyCart';
const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cart.reduce((total, cartItem) => {
            return total + cartItem.qty * parseFloat(cartItem.price.replace('$', ''));
        }, 0);
        setTotal(newTotal);
    }, [cart]);
    return (
        cart.length === 0 ? (
            <EmptyCart />
        ) : (
            <>
                <div className='route'>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li><GiStraightPipe /></li>
                        <li><Link to="">Cart</Link></li>
                    </ol>
                </div>
                <div className="home">
                    <div className="productContainer">
                        <h3 class="cart-page-title">Your cart items</h3>
                        <section>
                            <div class="outer-wrapper">
                                <div class="inner-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>IMAGE</th>
                                                <th>PRODUCT NAME</th>
                                                <th>SIZE</th>
                                                <th>QUANTITY</th>
                                                <th>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((prod) => (
                                                <tr>
                                                    <td className='img-td' data-column="First Name">
                                                        <img src={prod.img} />
                                                    </td>
                                                    <td data-column="Last Name">{prod.title}</td>
                                                    <td data-column="Last Name">
                                                        <div className='select-dropdown'>
                                                            <select>{
                                                                prod.size.map((x, y) =>
                                                                    <option key={y}>{x}</option>)
                                                            }</select>
                                                        </div>
                                                    </td>
                                                    <td data-column="Job Title">
                                                        <form
                                                            as="select"
                                                            value={prod.qty}
                                                            onChange={(e) =>
                                                                dispatch({
                                                                    type: "CHANGE_CART_QTY",
                                                                    payload: {
                                                                        id: prod.id,
                                                                        qty: e.target.value,
                                                                    },
                                                                })
                                                            }
                                                        >
                                                            <div className='select-dropdown'>
                                                                <select>{
                                                                    prod.inStock.map((x, y) =>
                                                                        <option key={y}>{x}</option>)
                                                                }</select>
                                                            </div>
                                                        </form>



                                                    </td>
                                                    <td data-column="Twitter">
                                                        <button className='cart-delete'
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: "REMOVE_FROM_CART",
                                                                    payload: prod,
                                                                })
                                                            }
                                                        >
                                                            <IoMdClose />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="pseduo-track"></div>
                        </section>
                        <div className='cart-shipping-wrapper-update'>
                            <div className='cart-shipping-update'>
                                <Link to='/shop'>CONTINUE SHOPING</Link>
                            </div>
                            <div className='clear-cart'>
                                <Link to=''
                                    onClick={() =>
                                        dispatch({
                                            type: "CLEAR_CART",
                                            payload: [],
                                        })
                                    }
                                >CLEAR CART</Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='cart-shipping'>
                                <div className='title-wrapper'>
                                    <h4>Estimate Shipping And Tax</h4>
                                </div>
                                <div className='shipping-description'>
                                    <p>Enter your destination to get a shipping estimate.</p>
                                </div>
                                <div className='select-wrapper'>
                                    <label>* Country</label>
                                    <select>
                                        <option>Bangladesh</option>
                                        <option>Albania</option>
                                        <option>Åland Islands</option>
                                        <option>Afghanistan</option>
                                        <option>Belgium</option>
                                    </select>
                                </div>
                                <div className='select-wrapper pt-30'>
                                    <label>* religon / state </label>
                                    <select >
                                        <option>Bangladesh</option>
                                        <option>Albania</option>
                                        <option>Åland Islands</option>
                                        <option>Afghanistan</option>
                                        <option>Belgium</option>
                                    </select>
                                </div>
                                <div className='zip-select'>
                                    <label>*  Zip/Postal Code </label>
                                    <input type="text" />
                                </div>
                                <button class="cart-btn-2" type="submit">Get A Quote</button>
                            </div>
                            <div className='cart-coupon'>
                                <div className='cart-coupon-wrapper'>
                                    <div className='title-wrapper'>
                                        <h4>Use Coupon Code</h4>
                                    </div>
                                    <p >Enter your coupon code if you have one.</p>
                                    <div className='zip-select'>
                                        <input type="text" />
                                    </div>
                                    <button class="cart-btn-2" type="submit">APPLY COUPON</button>
                                </div>
                            </div>
                            <div className='cart-total'>
                                <div className='cart-total-wrapper'>
                                    <div className='title-wrapper'>
                                        <h4>Cart Total</h4>
                                    </div>
                                    <h5>Total products <span>{cart.length}</span></h5>
                                    <h5 className='total'>GRAND TOTAL<span> ${total}</span></h5>
                                    <button class="cart-btn-2" type="submit">PROCEED TO CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    )
}

export default Cart