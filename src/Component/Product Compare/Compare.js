import React from 'react'
import { Link } from 'react-router-dom';
import './compare.css'
import { RiDeleteBinLine } from 'react-icons/ri';
import { CartState } from '../Shopping cart/context/Context';

import { FaStar, FaRegStar } from 'react-icons/fa';
import EmptyCompare from './EmptyCompare';
import Route from './Route';
const Compare = () => {
    const {
        Comparestate: { compare },
        dispatchCompare,
    } = CartState();
    const products = [
        {
            name: 'Product 1',
            price: '$10',
            description: 'Des1',
            rating: 4.5
        },
        {
            name: 'Product 2',
            price: '$11',
            description: 'Des2',
            rating: 3.8
        },
        {
            name: 'Product 3',
            price: '$10',
            description: 'Des3',
            rating: 4.2
        }
    ];
    return (
        compare.length === 0 ? (
            <EmptyCompare />
        ) : (
            <>
                <Route />
                <div className='compare'>
                    <div className="compare-container">
                        <table className="compare-table">
                            <thead>
                                <tr>
                                    <th className='product-info'>Product info</th>
                                    {compare.map((product, index) => (
                                        <th key={index}>
                                            <button className='compare-button'
                                                onClick={() =>
                                                    dispatchCompare({
                                                        type: "REMOVE_FROM_COMPARE",
                                                        payload: product,
                                                    })
                                                }
                                            >
                                                <RiDeleteBinLine className='compare-remove-btn' />
                                            </button>
                                            <Link to='' className='image'>
                                                <img src={product.img} alt="Product" />
                                            </Link>
                                            <div className='product-title'>
                                                <Link to=''>{product.title}</Link>
                                            </div>
                                            <div className='compare-button'>
                                                <Link to={`/ViewSingleProduct/${product.id}`}>select option</Link>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='title-column'>Price</td>
                                    {compare.map((product, index) => (
                                        <td className='product-price' key={index}>{product.price}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='title-column'>Description</td>
                                    {compare.map((product, index) => (
                                        <td className='product-description' key={index}>
                                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='title-column'>Rating</td>
                                    {compare.map((product, index) => (
                                        <td className='product-rating' key={index}>
                                            {Array.from({ length: 5 }, (_, index) => {
                                                if (index < product.rating.length && product.rating[index]) {
                                                    return <FaStar className='star_icon' key={index} />;
                                                } else {
                                                    return <FaRegStar className='star_icon' key={index} />;
                                                }
                                            })}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    )
}
export default Compare
