import React, { useContext, useState, useMemo } from 'react'
import SingleProduct from "./SingleProduct"
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import './style.css';
const Product = () => {
    const {
        state: { products }
    } = CartState();
    const [selectedCategory, setSelectedCategory] = useState('best-seller');

    // Filter the products based on the selected category
    const filteredProducts = products.filter((prod) => {
        if (selectedCategory === 'new-arrivals') {
            return prod.sellcategory === 'new-arrivals';
        } else if (selectedCategory === 'best-seller') {
            return prod.sellcategory === 'best-seller';
        } else if (selectedCategory === 'sales-item') {
            return prod.sellcategory === 'sales-item';
        }
        return true; // Show all products if no category is selected
    });

    // Calculate limitedProducts only once
    const limitedProducts = filteredProducts.slice(0, 8);
    return (
        <>
            <h3 class="section-title">
                <b></b>
                <span class="section-title-main">DAILY DEALS!</span>
                <b></b>
            </h3>
            <div className='product-tab-list'>
                <div className='nav-item'>
                    <Link
                        className={`nav-links ${selectedCategory === 'new-arrivals' ? 'active' : ''}`}
                        to=''
                        onClick={() => setSelectedCategory('new-arrivals')}
                    >
                        <h4>New Arrivals</h4>
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                        className={`nav-links ${selectedCategory === 'best-seller' ? 'active' : ''}`}
                        to=''
                        onClick={() => setSelectedCategory('best-seller')}
                    >
                        <h4>Best Seller</h4>
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link
                        className={`nav-links ${selectedCategory === 'sales-item' ? 'active' : ''}`}
                        to=''
                        onClick={() => setSelectedCategory('sales-item')}
                    >
                        <h4>Sales Item</h4>
                    </Link>
                </div>
            </div>
            <div className='product-section'>
                <div className='product-container'>
                    <div className='product-row'>
                        {limitedProducts.map((prod) => (
                            <SingleProduct prod={prod} key={prod.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product