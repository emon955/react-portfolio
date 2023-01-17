import React from 'react'
import { CartState } from '../context/Context';
import Rating from './Rating';
import { AiOutlineHeart,AiFillEye} from "react-icons/ai";
const SingleProduct = ({ prod }) => {
    const {
        state: { cart },
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
                            <AiOutlineHeart />
                        </div>
                        <div className='add-remove-btn'>
                            {cart.some((p) => p.id === prod.id) ? (
                                <div
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                    }
                                    disabled={!prod.inStock}
                                >
                                    Remove from Cart
                                </div>
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