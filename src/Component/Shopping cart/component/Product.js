import React, { useContext } from 'react'
import SingleProduct from "./SingleProduct"
import { CartState } from '../context/Context';
import './style.css';
const Product = () => {
    const {
        state: { products }
    } = CartState();
    return (
        <div className='product-section'>
            <h3 class="section-title">
                <b></b>
                <span class="section-title-main">DAILY DEALS!</span>
                <b></b>
            </h3>
            <div className='product-container'>
                <div className='product-row'>
                    {products.map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product