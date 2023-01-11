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