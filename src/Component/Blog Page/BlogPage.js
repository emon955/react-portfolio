import React, { useState } from 'react'
import "./blogPage.css"
import Route from './Route'
import { CiSearch } from "react-icons/ci";
import { AiOutlineComment, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BlogPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <Route />
            <div className='blog-section'>
                <div className='blog-section-container'>
                    <div className='blog-section-row'>
                        <div className='blog-section-left'>
                            <div className='blog-left-style'>
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
                                <div class="sidebar-widget">
                                    <h4 class="pro-sidebar-title">Recent Projects</h4>
                                    <div class="sidebar-project-wrap mt-30">
                                        <div class="single-sidebar-blog">
                                            <div class="sidebar-blog-img">
                                                <a href="/blog-details-standard">
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-1.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <span>Photography</span>
                                                <h4><a href="/blog-details-standard">T-Shirt And Jeans</a></h4>
                                            </div>
                                        </div>
                                        <div class="single-sidebar-blog">
                                            <div class="sidebar-blog-img">
                                                <a href="/blog-details-standard">
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <span>Branding</span>
                                                <h4><a href="/blog-details-standard">T-Shirt And Jeans</a></h4>
                                            </div>
                                        </div>
                                        <div class="single-sidebar-blog">
                                            <div class="sidebar-blog-img">
                                                <a href="/blog-details-standard">
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-3.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <span>Design</span>
                                                <h4><a href="/blog-details-standard">T-Shirt And Jeans</a></h4>
                                            </div>
                                        </div>
                                        <div class="single-sidebar-blog">
                                            <div class="sidebar-blog-img">
                                                <a href="/blog-details-standard">
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <span>Photography</span>
                                                <h4><a href="/blog-details-standard">T-Shirt And Jeans</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sidebar-widget mt-30'>
                                    <h4 class="pro-sidebar-title">Categories</h4>
                                    <div className='sidebar-widget-list mt-30'>
                                        <li>
                                            <div className='sidebar-widget-list-left'>
                                                <input type="checkbox" value="true"
                                                    style={{ backgroundColor: isChecked ? 'red' : '' }}
                                                    checked={isChecked}
                                                    onChange={handleChange}
                                                />
                                                <Link href="/blog-standard">Women <span>4</span> </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='sidebar-widget-list-left'>
                                                <input type="checkbox" value="true" />
                                                <Link href="/blog-standard">Mens <span>4</span> </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='sidebar-widget-list-left'>
                                                <input type="checkbox" value="true" />
                                                <Link href="/blog-standard">Bag <span>4</span> </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='sidebar-widget-list-left'>
                                                <input type="checkbox" value="true" />
                                                <Link href="/blog-standard">accsesorries <span>4</span> </Link>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                <div className="sidebar-widget tag">
                                    <h4 className="pro-sidebar-title">Tag</h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        className='checkmark'
                                                    >
                                                        clothing
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        className='checkmark'
                                                    >
                                                        Accessories
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        className='checkmark'
                                                    >
                                                        For Men
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        className='checkmark'
                                                    >
                                                        Women
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-widget-list-left">
                                                    <button
                                                        className='checkmark'
                                                    >
                                                        Fashion
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-section-right'>
                            <div className='blog-section-row'>
                                <div className='blog-section-box'>
                                    <div className='blog-image'>
                                        <img src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-9.jpg' />
                                    </div>
                                    <div className='blog-content-2'>
                                        <div className='date'>
                                            <ul>
                                                <li>
                                                    22 april, 2024
                                                </li>
                                                <li>
                                                    <Link>
                                                        4 <AiOutlineComment />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link>
                                                Lorem ipsum blog post
                                            </Link>
                                        </h4>
                                        <p>
                                            Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                                        </p>
                                        <div class="blog-share-comment">
                                            <div class="blog-btn-2">
                                                <a href="/blog-details-standard">read more</a>
                                            </div>
                                            <div class="blog-share">
                                                <span>share :</span>
                                                <div class="share-social">
                                                    <ul>
                                                        <li>
                                                            <Link class="facebook" href="//facebook.com"><FaFacebookF /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="instagram" href="//facebook.com"><AiOutlineInstagram /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="twitter" href="//facebook.com"><AiOutlineTwitter /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-section-box'>
                                    <div className='blog-image'>
                                        <img src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-8.jpg' />
                                    </div>
                                    <div className='blog-content-2'>
                                        <div className='date'>
                                            <ul>
                                                <li>
                                                    22 april, 2024
                                                </li>
                                                <li>
                                                    <Link>
                                                        4 <AiOutlineComment />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link>
                                                New collection of our shop
                                            </Link>
                                        </h4>
                                        <p>
                                            Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                                        </p>
                                        <div class="blog-share-comment">
                                            <div class="blog-btn-2">
                                                <a href="/blog-details-standard">read more</a>
                                            </div>
                                            <div class="blog-share">
                                                <span>share :</span>
                                                <div class="share-social">
                                                    <ul>
                                                        <li>
                                                            <Link class="facebook" href="//facebook.com"><FaFacebookF /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="instagram" href="//facebook.com"><AiOutlineInstagram /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="twitter" href="//facebook.com"><AiOutlineTwitter /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-section-box'>
                                    <div className='blog-image'>
                                        <img src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-7.jpg' />
                                    </div>
                                    <div className='blog-content-2'>
                                        <div className='date'>
                                            <ul>
                                                <li>
                                                    22 april, 2024
                                                </li>
                                                <li>
                                                    <Link>
                                                        4 <AiOutlineComment />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link>
                                                Ipsum blog post two
                                            </Link>
                                        </h4>
                                        <p>
                                            Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                                        </p>
                                        <div class="blog-share-comment">
                                            <div class="blog-btn-2">
                                                <a href="/blog-details-standard">read more</a>
                                            </div>
                                            <div class="blog-share">
                                                <span>share :</span>
                                                <div class="share-social">
                                                    <ul>
                                                        <li>
                                                            <Link class="facebook" href="//facebook.com"><FaFacebookF /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="instagram" href="//facebook.com"><AiOutlineInstagram /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="twitter" href="//facebook.com"><AiOutlineTwitter /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-section-box'>
                                    <div className='blog-image'>
                                        <img src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-6.jpg' />
                                    </div>
                                    <div className='blog-content-2'>
                                        <div className='date'>
                                            <ul>
                                                <li>
                                                    22 april, 2024
                                                </li>
                                                <li>
                                                    <Link>
                                                        4 <AiOutlineComment />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link>
                                                New shop collection
                                            </Link>
                                        </h4>
                                        <p>
                                            Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                                        </p>
                                        <div class="blog-share-comment">
                                            <div class="blog-btn-2">
                                                <a href="/blog-details-standard">read more</a>
                                            </div>
                                            <div class="blog-share">
                                                <span>share :</span>
                                                <div class="share-social">
                                                    <ul>
                                                        <li>
                                                            <Link class="facebook" href="//facebook.com"><FaFacebookF /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="instagram" href="//facebook.com"><AiOutlineInstagram /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="twitter" href="//facebook.com"><AiOutlineTwitter /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-section-box'>
                                    <div className='blog-image'>
                                        <img src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-5.jpg' />
                                    </div>
                                    <div className='blog-content-2'>
                                        <div className='date'>
                                            <ul>
                                                <li>
                                                    22 april, 2024
                                                </li>
                                                <li>
                                                    <Link>
                                                        4 <AiOutlineComment />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link>
                                                Lorem blog post four
                                            </Link>
                                        </h4>
                                        <p>
                                            Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                                        </p>
                                        <div class="blog-share-comment">
                                            <div class="blog-btn-2">
                                                <a href="/blog-details-standard">read more</a>
                                            </div>
                                            <div class="blog-share">
                                                <span>share :</span>
                                                <div class="share-social">
                                                    <ul>
                                                        <li>
                                                            <Link class="facebook" href="//facebook.com"><FaFacebookF /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="instagram" href="//facebook.com"><AiOutlineInstagram /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="twitter" href="//facebook.com"><AiOutlineTwitter /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-section-box'>
                                    <div className='blog-image'>
                                        <img src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-4.jpg' />
                                    </div>
                                    <div className='blog-content-2'>
                                        <div className='date'>
                                            <ul>
                                                <li>
                                                    22 april, 2024
                                                </li>
                                                <li>
                                                    <Link>
                                                        4 <AiOutlineComment />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link>
                                                Ipsum blog post five
                                            </Link>
                                        </h4>
                                        <p>
                                            Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
                                        </p>
                                        <div class="blog-share-comment">
                                            <div class="blog-btn-2">
                                                <a href="/blog-details-standard">read more</a>
                                            </div>
                                            <div class="blog-share">
                                                <span>share :</span>
                                                <div class="share-social">
                                                    <ul>
                                                        <li>
                                                            <Link class="facebook" href="//facebook.com"><FaFacebookF /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="instagram" href="//facebook.com"><AiOutlineInstagram /></Link>
                                                        </li>
                                                        <li>
                                                            <Link class="twitter" href="//facebook.com"><AiOutlineTwitter /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination">
                                <div className='pageination-container'>
                                        <button
                                            className='active'
                                        >
                                           1
                                        </button>
                                        <button
                                            className='active'
                                        >
                                           2
                                        </button>
                                        <button
                                            className='active'
                                        >
                                           3
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default BlogPage
