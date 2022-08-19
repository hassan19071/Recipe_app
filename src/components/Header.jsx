import React, { Fragment } from "react";
import img1 from "../imgs/hero-bg1.jpg";
import img2 from "../imgs/hero-bg2.jpg";
import "../css/hero.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" />
                <div className="carousel-caption d-md-block text-start">
                   <div className="container">
                   <h1>Find your favorite<br /> food recipe</h1>
                   <p>A recipe has no soul. You as the cook must bring soul to the recipe</p>
                   </div>
                </div>
                <div className="overlay position-absolute"></div>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" />
                <div className="carousel-caption text-start d-md-block">
                   <div className="container">
                   <h1>Find your favorite<br /> food recipe</h1>
                   <p>A recipe has no soul. You as the cook must bring soul to the recipe</p>
                   </div>
                </div>
                <div className="overlay position-absolute"></div>
              </div>
            </div>
            <button
              className="carousel-control-prev prev d-lg-block d-none"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next next d-lg-block d-none"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </div>
    </Fragment>
  );
};

export default Header;
