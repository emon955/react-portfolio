import React from 'react'
// import "./shopcart.css"
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { IoMdClose } from 'react-icons/io';
import { CartState } from '../Shopping cart/context/Context';
// import Rating from '../Shopping cart/component/Rating';
import Wishlistrouter from './Wishlistrouter';
import "./wishlist.css"
const Wishlist = () => {
    const {
        state: { cart },
        whilliststate: { whillist },
        dispatchWhillist,
        dispatch,
    } = CartState();
   
    return (
        whillist.length === 0 ? (
            <Wishlistrouter />
        ):(
        <div className="home">
            <div className="productContainer">
                <section>
                    <div class="outer-wrapper">
                        <div class="inner-wrapper">
                            <table className='wishlist-tbl'>
                                <thead>
                                    <tr>
                                        <th>IMAGE</th>
                                        <th>PRODUCT NAME</th>
                                        <th>UNIT PRICE</th>
                                        <th>ADD TO CART</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {whillist.map((prod) => (
                                        <tr>
                                            <td className='img-td' data-column="First Name">
                                                <img src={prod.img} />
                                            </td>
                                            <td data-column="Last Name">{prod.title}</td>
                                            <td data-column="Last Name">
                                                {/* <div className='select-dropdown'>
                                                        <select>{
                                                            prod.size.map((x, y) =>
                                                                <option key={y}>{x}</option>)
                                                        }</select>
                                                   </div>      */}
                                                {prod.price}
                                            </td>
                                            <td data-column="Job Title">

                                                {!prod.inStock ? (
                                                    <button className='wishlist-buy-cart stockout'
                                                        disabled={!prod.inStock}
                                                    >Out of stock</button>
                                                ) : (
                                                    cart.some((item) => item.id === prod.id) ? (
                                                        <button className='wishlist-buy-cart' disabled>
                                                            Added to Cart
                                                        </button>
                                                    ) : (
                                                        <button className='wishlist-buy-cart'

                                                            onClick={() =>
                                                                dispatch({
                                                                    type: "ADD_TO_CART",
                                                                    payload: prod,
                                                                })
                                                            }
                                                            disabled={!prod.inStock}
                                                        >
                                                            BUY NOW
                                                        </button>
                                                    )
                                                )}
                                            </td>
                                            <td data-column="Twitter">
                                                <button className='cart-delete'
                                                    onClick={() =>
                                                        dispatchWhillist({
                                                            type: "REMOVE_FROM_WHILLIST",
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
            </div>
            {/* <div className='filters summary'>
                <span className='title'>Subtotal ({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
                <Button type="button" disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div> */}
        </div>)
    )
}

export default Wishlist