import "./contactform.css";
import React from 'react';
import Route from "./Route";
import { FiPhone } from "react-icons/fi"
import { BiWorld } from "react-icons/bi"
import { FaFacebookF,FaPinterestP } from "react-icons/fa"
import { AiOutlineDribbble,AiOutlineTwitter,AiFillLinkedin } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
const ContactForm = () => {


    return (
        <>
            <Route />
            <div className='contact-form-section'>
                <div className="contact-form-container">
                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="contact-form-row">
                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-icon">
                                    <FiPhone className="icon" />
                                </div>
                                <div className="contact-info">
                                    <p>+012 345 678 102</p>
                                    <p>+012 345 678 102</p>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-icon">
                                    <BiWorld className="icon" />
                                </div>
                                <div className="contact-info">
                                    <p>yourname@email.com</p>
                                    <p>yourwebsitename.com</p>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-icon">
                                    <MdLocationOn className="icon" />
                                </div>
                                <div className="contact-info">
                                    <p>+012 345 678 102</p>
                                    <p>+012 345 678 102</p>
                                </div>
                            </div>
                            <div class="pro-details-social contact">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li><a href="//facebook.com"><FaFacebookF /></a></li>
                                    <li><a href="//dribbble.com"><AiOutlineDribbble /></a></li>
                                    <li><a href="//pinterest.com"><FaPinterestP /></a></li>
                                    <li><a href="//twitter.com"><AiOutlineTwitter /></a></li>
                                    <li><a href="//linkedin.com"><AiFillLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="contact-form-title">
                                <h2>Get In Touch</h2>
                                <div className="form-row">
                                    <div class="name-input">
                                        <input name="name" placeholder="Name*" type="text" />
                                    </div>
                                    <div class="email-input">
                                        <input name="name" placeholder="Name*" type="text" />
                                    </div>
                                    <div class="subject-input">
                                        <input name="name" placeholder="Name*" type="text" />
                                    </div>
                                    <div class="text-area">
                                        <textarea name="message" placeholder="Your Message*"></textarea>
                                        <button class="submit" type="submit">SEND</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;

