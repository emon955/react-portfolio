import React from "react";
import { Link } from "react-router-dom";
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="row">
            <div className="left-div">
              <h3>{slide.title}</h3>
              <h1>{slide.title2} <br/>{slide.title3}</h1>
              <Link to="/">SHOP NOW</Link>
            </div>
            <div className="right-div">
                <img src={slide.urls} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
