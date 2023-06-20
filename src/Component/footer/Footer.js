import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='section ft-p-t ft-p-b footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-box'>
                        <div className='footer-logo'>
                            <a>
                                <img src='https://flone.jamstacktemplates.dev/assets/img/logo/logo.png' />
                            </a>
                        </div>
                        <p className='copyright'>
                            © 2023 Flone.<br/>
                            All Rights Reserved
                        </p>
                    </div>
                    <div className='footer-box'>
                        <div className='footer-title'>
                            <h3>About us</h3>
                        </div>
                        <div className='footer-list'>
                            <ul>
                                <li><a>about us</a></li>
                                <li><a>Store location</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Orders tracking</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-box'>
                        <div className='footer-title'>
                            <h3>USEFUL LINKS</h3>
                        </div>
                        <div className='footer-list'>
                            <ul>
                                <li><a>Returns</a></li>
                                <li><a>Support Policy</a></li>
                                <li><a>Size guide</a></li>
                                <li><a>FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-box'>
                        <div className='footer-title'>
                            <h3>FOLLOW US</h3>
                        </div>
                        <div className='footer-list'>
                            <ul>
                                <li><a>Facebook</a></li>
                                <li><a>Twitter</a></li>
                                <li><a>Instagram</a></li>
                                <li><a>Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-box last'>
                        <div className='footer-title'>
                            <h3>SUBSCRIBE</h3>
                        </div>
                        <div className='footer-list'>
                            <ul>
                                <li><a>Get E-mail updates about our latest shop and special offers.</a></li>
                                <input type='text' placeholder='ENTER YOUR EMAIL ADDRESS' />
                                <button className='sub-button' >SUBSCRIBE</button>
                             </ul>                                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer