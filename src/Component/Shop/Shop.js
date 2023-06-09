import React, { useState } from 'react'
import "./shop.css"
import { CartState } from '../Shopping cart/context/Context'
import SingleProduct from '../Shopping cart/component/SingleProduct'
import { CiSearch } from "react-icons/ci";
import Route from './Route'
const Shop = () => {
    const {
        state: { cart },
        state: { products },
        whilliststate: { whillist },
        dispatchWhillist,
        dispatch,
    } = CartState();
    // State to keep track of the selected category
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter((prod) => prod.category === selectedCategory);
    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <Route />
            <div className='shop-section'>
                <div className='shop-container'>
                    <div className='shop-row'>
                        <div className='shop-left'>
                            <div className='shop-left-style'>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Search</h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="pro-sidebar-search-form" action="#">
                                            <input type="text" placeholder="Search here..." />
                                            <button>
                                                <CiSearch />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Categories</h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button 
                                                        onClick={() => handleCategorySelection('all')}
                                                    >
                                                        <span className={selectedCategory === 'all' ? 'checkmark active' : 'checkmark'}></span> All Categories
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button 
                                                        onClick={() => handleCategorySelection('fashion')}
                                                    >
                                                        <span className={selectedCategory === 'fashion' ? 'checkmark active' : 'checkmark'}></span> fashion
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                    onClick={() => handleCategorySelection('men')}
                                                    >
                                                        <span className={selectedCategory === 'men' ? 'checkmark active' : 'checkmark'}></span> men
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-section shop'>
                            <div className='product-container'>
                                <div className='product-row'>
                                    {filteredProducts.map((prod) => (
                                        <SingleProduct prod={prod} key={prod.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Shop