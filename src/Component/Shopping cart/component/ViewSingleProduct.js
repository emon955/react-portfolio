import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { CartState } from '../context/Context';
import { FaStar, FaRegStar, FaFacebookF } from 'react-icons/fa';
import { BiGitCompare } from 'react-icons/bi';
import { AiOutlineDribbble, AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './viewsingleproduct.css'
import ItemDetail1 from './ItemDetail1';
import Route from './Route/Route';
import RelatedProduct from './Related Product/RelatedProduct';
function ViewSingleProduct() {
  const { productId } = useParams()
  const {
    state: { products },
    state: { cart },
    whilliststate: { whillist },
    dispatchWhillist,
    dispatch,
    Comparestate: { compare },
    dispatchCompare,

  } = CartState();

  console.log(productId)
  const thisProduct = products.find(prod => prod.id === productId)
  const [currentIndex, setCurrentIndex] = useState(0);

  const [topImage, setTopImage] = useState(thisProduct.img);
  const handleBottomImageClick = (image, clickedIndex) => {
    setTopImage(image);
    setCurrentIndex(clickedIndex);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setSelectedItem(1);
    const itemsFromData = thisProduct.description_review_item.map((item, index) => ({
      id: index + 1,
      ...item
    }));
    setItems(itemsFromData);
  }, []);

  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.category === thisProduct.category && product.id !== thisProduct.id;
    });
    setRelatedProducts(filteredProducts);
  }, [thisProduct]);

  const handleTopbarClick = (index) => {
    setSelectedItem(index + 1);

  };
  const isProductAdded = (product) => {
    return compare.some((item) => item.id === product.id);
  };
  return (
    <div>
      <Route />
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
                      <button className='btn'
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
                  {/* <button class="" className="Add_to_wishlist"
                    onClick={() =>
                      dispatchWhillist({
                        type: "ADD_TO_WHILLIST",
                        payload: thisProduct,
                      })
                    }

                  >
                    <BsHeart />
                  </button> */}
                  {
                    whillist.some((p) => p.id === thisProduct.id) ? (
                      <button style={{ color: "#a749ff" }}
                        onClick={() =>
                          dispatchWhillist({
                            type: "REMOVE_FROM_WHILLIST",
                            payload: thisProduct,
                          })
                        }
                        disabled
                      >
                        <AiFillHeart className='wishlist-icon'
                        />
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          dispatchWhillist({
                            type: "ADD_TO_WHILLIST",
                            payload: thisProduct,
                          })
                        }
                      >
                        <AiOutlineHeart className='wishlist-icon'
                        />
                      </button>
                    )
                  }
                </div>
                <div class="pro-details-compare">
                  <button className={`Add_to_compare ${isProductAdded(thisProduct) ? 'disabled' : ''}`}
                    onClick={() =>
                      dispatchCompare({
                        type: "ADD_TO_COMPARELIST",
                        payload: thisProduct,
                      })
                    }
                    disabled={isProductAdded(thisProduct)}
                  >
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
              <div class="pro-details-tag">
                <span>Tags :</span>
                <ul>
                  <li><a href="/shop-grid-standard">fashion</a>
                  </li><li><a href="/shop-grid-standard">kids</a></li>
                </ul>
              </div>
              <div class="pro-details-social">
                <ul>
                  <li><a href="//facebook.com"><FaFacebookF /></a></li>
                  <li><a href="//dribbble.com"><AiOutlineDribbble /></a></li>
                  <li><a href="//pinterest.com"><FaPinterestP /></a></li>
                  <li><a href="//twitter.com"><AiOutlineTwitter /></a></li>
                  <li><a href="//linkedin.com"><AiFillLinkedin /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='description-review-top'>
          <div className='description-review-container'>
            <ul>
              {thisProduct.description_review_topbar.map((topbarItem, index) => (
                <li key={index}>
                  <Link
                    to=''
                    onClick={() => handleTopbarClick(index)}
                    className={selectedItem === index + 1 ? 'selected-item' : ''}
                  >
                    {topbarItem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='description-review-area'>
          <div className='container'>
            <div className='description-review-bottom'>
              {items.map((item, index) => (
                <ItemDetail1 key={item.id} item={item} selected={selectedItem === item.id ? selectedItem : null} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className='product-section'>
          <h3 className="section-title">
            <b></b>
            <span className="section-title-main">Relate PRODUCT</span>
            <b></b>
          </h3>
          <div className='product-container'>
            <div className='product-row'>
              {relatedProducts.map((prod) => (
                <RelatedProduct key={prod.id} prod={prod} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewSingleProduct;