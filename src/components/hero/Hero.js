import React from "react";
import { useNavigate } from "react-router";
import "./hero.styles.scss";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title">
            because <span>every</span> day is <span>wineday</span>
          </h1>
          <div className="shop-now-btn">
            <button
              className="button is-black"
              id="shop-now-btn"
              onClick={() => navigate("/products")}
            >
              SHOP OUR RANGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
