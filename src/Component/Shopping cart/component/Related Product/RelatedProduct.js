import React, { useState,useEffect } from 'react'
import { CartState } from '../../context/Context';
import { Link, useHistory } from 'react-router-dom'
import Rating from '../Rating';
// import '../style.css'
import { AiOutlineHeart, AiFillEye, AiFillHeart } from "react-icons/ai";
import ViewSingleProduct from '../ViewSingleProduct';
const RelatedProduct = ({ prod }) => {
    const {
        state: { cart },
        state: { products },
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
                        {
                            whillist.some((p) => p.id === prod.id) ? (
                                <button
                                    onClick={() =>
                                        dispatchWhillist({
                                            type: "REMOVE_FROM_WHILLIST",
                                            payload: prod,
                                        })
                                    }
                                >
                                    <AiFillHeart className='wishlist-icon'
                                    />
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        dispatchWhillist({
                                            type: "ADD_TO_WHILLIST",
                                            payload: prod,
                                        })
                                    }
                                >
                                    <AiOutlineHeart className='wishlist-icon'
                                    />
                                </button>
                            )
                        }
                    </div>
                    <div className='add-remove-btn'>
                        {cart.some((p) => p.id === prod.id) ? (
                            <button className='remove_from_cart'
                                disabled={!prod.inStock}
                            >
                                added
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
                        <Link
                            className='link-quick-view'
                        > <AiFillEye className='quick-view-icon' />
                        </Link>
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
};
export default RelatedProduct
