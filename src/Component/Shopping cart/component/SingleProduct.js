import React, { useState } from 'react'
import { CartState } from '../context/Context';
import Rating from './Rating';
import { AiOutlineHeart, AiFillEye,AiFillHeart } from "react-icons/ai";
const SingleProduct = ({ prod }) => {
    const {
        state: { cart },
        whilliststate: { whillist },
        dispatchWhillist,
        dispatch,
    } = CartState();
    return (
        <div className='product-box'>
            <div className='product-imge'>
                <div className='img-box'>
                    <img src={prod.img} />
                </div>
                <div className='product-functionality'>
                    <div className='whilelsit'>
                        {/* <AiOutlineHeart 
                                onClick={() =>
                                    dispatchWhillist({
                                        type: "ADD_TO_WHILLIST",
                                        payload: prod,
                                    })
                                } 

                            /> */}
                        {
                            whillist.some((p) => p.id === prod.id) ? (
                                <AiFillHeart
                                    onClick={() =>
                                        dispatchWhillist({
                                            type: "REMOVE_FROM_WHILLIST",
                                            payload: prod,
                                        })
                                    }

                                />
                            ) : (
                                <AiOutlineHeart
                                    onClick={() =>
                                        dispatchWhillist({
                                            type: "ADD_TO_WHILLIST",
                                            payload: prod,
                                        })
                                    }

                                />
                            )
                        }
                    </div>
                    <div className='add-remove-btn'>
                        {cart.some((p) => p.id === prod.id) ? (
                            <button className='remove_from_cart'
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    })
                                }
                                disabled={!prod.inStock}
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button className="add-to-cart-btn"
                                onClick={() =>
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    })
                                }
                                disabled={!prod.inStock}
                            >
                                {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                            </button>
                        )}
                    </div>
                    <div className='quick-view'>
                        <AiFillEye />
                    </div>
                </div>
                <div className='product-image-batch'>
                    {/* <span className='pink'>
                            {prod.imagebatch}
                        </span> */}
                </div>
            </div>
            <div className='product-details'>
                <div>{prod.title}</div>

                <div className='product-rating'>
                    <Rating rating={prod.rating} />
                </div>
                <div className='product-price'>
                    <span>{prod.price}</span>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct