import React from 'react'
import "./shopcart.css"
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
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
        ):(
        <div className="home">
            <div className="productContainer">
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

export default Cart