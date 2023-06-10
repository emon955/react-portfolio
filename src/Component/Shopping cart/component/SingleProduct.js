import React, { useState } from 'react'
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';
import Rating from './Rating';
import { AiOutlineHeart, AiFillEye, AiFillHeart } from "react-icons/ai";
import ViewSingleProduct from './ViewSingleProduct';
const SingleProduct = ({ prod }) => {
    const [hovered, setHovered] = useState(false);
    const {
        state: { cart },
        whilliststate: { whillist },
        dispatchWhillist,
        dispatch,
    } = CartState();
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <div className='product-box'>
            <div className='product-imge'>
                <div className='img-box'>
                    {/* <img src={prod.img} /> */}
                    <img
                        src={hovered ? prod.productslideImage[0] : prod.img}
                        alt="Product"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={hovered ? 'hovered' : ''}
                    />
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
                        <Link to={`/ViewSingleProduct/${prod.id}`} className='link-quick-view'> <AiFillEye className='quick-view-icon' /></Link>
                    </div>
                </div>
                {/* {prod.imagebatch && ( */}
                    <div className='product-image-batch'>
                        {prod.imagebatch !== false && (
                            <span className='pink'>
                                {prod.imagebatch}
                            </span>
                        )}
                        {prod.imagebatch2 !== "" && (
                            <span className='pink'>
                                {prod.imagebatch2}
                            </span>
                        )}
                    </div>
                {/* )} */}
            </div>
            <div className='product-details'>
                <div className='product-details-title'>{prod.title}</div>

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