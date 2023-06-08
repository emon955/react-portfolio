import React from 'react'
import { CartState } from '../Shopping cart/context/Context'
import SingleProduct from '../Shopping cart/component/SingleProduct'

const Shop = () => {
    const {
        state: { cart },
        state: { products },
        whilliststate: { whillist },
        dispatchWhillist,
        dispatch,
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

export default Shop