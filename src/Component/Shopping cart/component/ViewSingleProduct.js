import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import { CartState } from '../context/Context';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { BiGitCompare } from 'react-icons/bi';
import './viewsingleproduct.css'
function ViewSingleProduct() {
  const { productId } = useParams()
  const {
    state: { products },
    state: { cart },
    dispatch,
  } = CartState();
  const thisProduct = products.find(prod => prod.id === productId)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topImage, setTopImage] = useState(thisProduct.img);
  const handleBottomImageClick = (image, clickedIndex) => {
    setTopImage(image);
    setCurrentIndex(clickedIndex);
  };
  const fullStar = '★';
  const emptyStar = '☆';
  return (
    <div className='product-detailsSection'>
      <div className='product-container'>
        <div className='product-detailsSection-row'>
          <div className='detail-left'>
            <img className='main-img' src={topImage} alt="Bottom Image" />
            <div className='image-wrapper'>
              {thisProduct.productslideImage.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Bottom Image"
                  onClick={() => handleBottomImageClick(image, index)}
                  className={index === currentIndex ? 'active' : ''}
                />
              ))}
            </div>
          </div>
          <div className='detail-right'>
            <h2>{thisProduct.title}</h2>
            <div className='product-details-price'>
              <span>{thisProduct.price}</span>
            </div>
            <div className='product-rating'>
              {Array.from({ length: 5 }, (_, index) => {
                if (index < thisProduct.rating.length && thisProduct.rating[index]) {
                  return <FaStar className='star_icon' key={index} />;
                } else {
                  return <FaRegStar className='star_icon' key={index} />;
                }
              })}
            </div>
            <div className='product-details-list'>
              <p>{thisProduct.desc}</p>
            </div>
            <div className='product-details-functionality'>
              <div className="product_add_cart">
                {
                  !thisProduct.inStock ? (
                    <button
                      disabled={!thisProduct.inStock}
                    >Out of stock</button>
                  ) : (
                    cart.some((item) => item.id === thisProduct.id) ? (
                      <button className='btn' disabled>
                        Added to Cart
                      </button>
                    ) : (
                      <button className='btn'

                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: { ...thisProduct, img: topImage }
                          })
                        }
                        disabled={!thisProduct.inStock}
                      >
                        add to cart
                      </button>
                    )
                  )
                }
              </div>
              <div class="pro-details-wishlist">
                <button class="" className="Add_to_wishlist">
                  <BsHeart />
                </button>
              </div>
              <div class="pro-details-compare">
                <button class="Add_to_compare">
                  <BiGitCompare />
                </button>
              </div>
            </div>
            <div className="pro-details-category">
              <span>
                Categories :
              </span>
              <ul>
                <li><a href="/">fashion</a>
                </li><li><a href="/">women</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSingleProduct;