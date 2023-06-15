import React from 'react'
import "./blogPage.css"
import Route from './Route'
import { CiSearch } from "react-icons/ci";
const BlogPage = () => {
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
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-2.jpg" alt=""/>
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
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-3.jpg" alt=""/>
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
                                                    <img src="https://flone.jamstacktemplates.dev/assets/img/blog/sidebar-2.jpg" alt=""/>
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <span>Photography</span>
                                                <h4><a href="/blog-details-standard">T-Shirt And Jeans</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-section-right'>
                            hi
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage
