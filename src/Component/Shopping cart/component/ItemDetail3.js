import React from 'react';
const ItemDetail3 = () => {
    return (
        <div className='singlepage-review-row'>
            <div className='singlepage-review-left'>
                <div className='riview_wrapper'>
                    <div className='single-rivew'>
                        <div class="review-img">
                            <img src="https://flone.jamstacktemplates.dev/assets/img/testimonial/1.jpg" alt="" />
                        </div>
                        <div className='riview-content'>
                            <div class="review-top-wrap">
                                <div class="review-left">
                                    <div class="review-name">
                                        <h4>White Lewis</h4>
                                    </div>
                                    <div class="review-rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <div class="review-right">
                                    <button>Reply</button>
                                </div>
                            </div>
                            <div class="review-bottom">
                                <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                            </div>
                        </div>
                    </div>
                    <div className='single-rivew child'>
                        <div class="review-img">
                            <img src="https://flone.jamstacktemplates.dev/assets/img/testimonial/1.jpg" alt="" />
                        </div>
                        <div className='riview-content'>
                            <div class="review-top-wrap">
                                <div class="review-left">
                                    <div class="review-name">
                                        <h4>White Lewis</h4>
                                    </div>
                                    <div class="review-rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <div class="review-right">
                                    <button>Reply</button>
                                </div>
                            </div>
                            <div class="review-bottom">
                                <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-ratting-form">
                <div class="ratting-form-wrapper">
                    <h3>Add a Review</h3>
                    <div class="ratting-form">
                        <form action="#">
                            <div class="star-box">
                                <span>Your rating:</span>
                                <div class="ratting-star">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <div class="rating-form-style mb-10">
                                        <input placeholder="Name" type="text"  />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="rating-form-style mb-10">
                                        <input placeholder="Email" type="email" />
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="rating-form-style form-submit">
                                        <textarea name="Your Review" placeholder="Message"></textarea>
                                        <input type="submit" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default ItemDetail3
// className={selected ? 'selected-item' : ''}