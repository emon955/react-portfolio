import React, { useState, useEffect } from 'react'
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
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const filteredProducts = (selectedSize === 'all' || selectedSize === '')
        ? ((selectedColor === 'all' || selectedColor === '')
            ? ((selectedCategory === 'all' || selectedCategory === '')
                ? (selectedTag === 'fashion' || selectedTag === '')
                    ? products
                    : products.filter((prod) => prod.tag === selectedTag)
                : products.filter((prod) => prod.category === selectedCategory))
            : products.filter((prod) => prod.color === selectedColor))
        : products.filter((prod) => prod.size.includes(selectedSize));

    const limitedProducts = filteredProducts.slice(0, 12);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);



    const handleCategorySelection = (category) => {
        setSelectedCategory(category)
        setSelectedColor('');
        setSelectedSize('');
        setSelectedTag('')
    };
    const handleColorSelection = (color) => {
        setSelectedColor(color)
        setSelectedCategory('');
        setSelectedSize('');
        setSelectedTag('')
    };
    const handleSizeSelection = (size) => {
        setSelectedSize(size);
        setSelectedCategory('');
        setSelectedColor('');
        setSelectedTag('')
    };
    const handleTagSelection = (Tag) => {
        setSelectedTag(Tag)
        setSelectedSize('');
        setSelectedCategory('');
        setSelectedColor('');

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
                                                        <span className={selectedCategory === 'men' ? 'checkmark active' : 'checkmark'}></span> men
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
                                    <h4 className="pro-sidebar-title">Color</h4>
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
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleColorSelection('black')}
                                                    >
                                                        <span className={selectedColor === 'black' ? 'checkmark active' : 'checkmark'}></span> black
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleColorSelection('brown')}
                                                    >
                                                        <span className={selectedColor === 'brown' ? 'checkmark active' : 'checkmark'}></span> Brown
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Size</h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleSizeSelection('all')}
                                                    >
                                                        <span className={selectedSize === 'all' ? 'checkmark active' : 'checkmark'}></span> all size
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleSizeSelection('x')}
                                                    >
                                                        <span className={selectedSize === 'x' ? 'checkmark active' : 'checkmark'}></span> x
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleSizeSelection('m')}
                                                    >
                                                        <span className={selectedSize === 'm' ? 'checkmark active' : 'checkmark'}></span> M
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleSizeSelection('xl')}
                                                    >
                                                        <span className={selectedSize === 'xl' ? 'checkmark active' : 'checkmark'}></span> Xl
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleSizeSelection('xxl')}
                                                    >
                                                        <span className={selectedSize === 'xxl' ? 'checkmark active' : 'checkmark'}></span> Xxl
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget tag">
                                    <h4 className="pro-sidebar-title">Tag</h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        onClick={() => handleTagSelection('fashion')}
                                                        className={selectedTag === 'fashion' ? 'checkmark active' : 'checkmark'}
                                                    >
                                                        fashion
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left tag">
                                                    <button
                                                        onClick={() => handleTagSelection('men')}
                                                        className={selectedTag === 'men' ? 'checkmark active' : 'checkmark'}
                                                    >
                                                        men
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left tag">
                                                    <button
                                                        onClick={() => handleTagSelection('jacket')}
                                                        className={selectedTag === 'jacket' ? 'checkmark active' : 'checkmark'}
                                                    >
                                                        Jacket
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left tag">
                                                    <button
                                                        onClick={() => handleTagSelection('full-sleeve')}
                                                        className={selectedTag === 'full-sleeve' ? 'checkmark active' : 'checkmark'}
                                                    >
                                                        Full Sleeve
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left tag">
                                                    <button
                                                        onClick={() => handleTagSelection('women')}
                                                        className={selectedTag === 'women' ? 'checkmark active' : 'checkmark'}
                                                    >
                                                        Women
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
                                    {currentProducts.map((prod) => (
                                        <SingleProduct prod={prod} key={prod.id} />
                                    ))}
                                </div>
                            </div>
                            <div className="pagination">
                                <div className='pageination-container'>
                                    {pageNumbers.map((pageNumber) => (
                                        <button
                                            key={pageNumber}
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={currentPage === pageNumber ? 'active' : ''}
                                        >
                                            {pageNumber}
                                        </button>
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