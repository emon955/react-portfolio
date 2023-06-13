import React from 'react'
import './compare.css'

const Compare = () => {
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
        <div className='compare'>
            <div className="compare-container">
                <table className="compare-table">
                    <thead>
                        <tr>
                            <th className='product-info'>Product info</th>
                            {products.map((product, index) => (
                                <td  key={index}>
                                    <h1>hello</h1>
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            {products.map((product, index) => (
                                <td key={index}>{product.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Description</th>
                            {products.map((product, index) => (
                                <td key={index}>{product.description}</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Rating</th>
                            {products.map((product, index) => (
                                <td key={index}>{product.rating}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Compare
