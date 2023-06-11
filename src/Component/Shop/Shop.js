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
    const [selectedColor, setSelectedColor] = useState('all');
    // const filteredProducts =
    //     selectedCategory === 'all'
    //         ? products
    //         : products.filter((prod) => prod.category === selectedCategory);
    const filteredProducts = selectedColor === 'all'
        ? (selectedCategory === 'all' ? products : products.filter((prod) => prod.category === selectedCategory))
        : products.filter((prod) => prod.color === selectedColor);

    const limitedProducts = filteredProducts.slice(0, 12);
    const handleCategorySelection = (category) => {
        setSelectedCategory(category)
        setSelectedColor('all'); 
    };
    const handleColorSelection = (color) => {
        setSelectedColor(color)
        setSelectedCategory('all');
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
                                                        <span className={selectedCategory === 'all' ? 'checkmark active' : 'checkmark'}></span> all
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
                                                        <span className={selectedCategory === 'men' ? 'checkmark active' : 'checkmark'}></span> women
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleCategorySelection('women')}
                                                    >
                                                        <span className={selectedCategory === 'women' ? 'checkmark active' : 'checkmark'}></span> women
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Categories</h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleColorSelection('all')}
                                                    >
                                                        <span className={selectedColor === 'all' ? 'checkmark active' : 'checkmark'}></span> all colors
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleColorSelection('white')}
                                                    >
                                                        <span className={selectedColor === 'white' ? 'checkmark active' : 'checkmark'}></span> white
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
                                    {limitedProducts.map((prod) => (
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