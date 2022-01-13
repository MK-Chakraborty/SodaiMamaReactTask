import React from "react";
import "./TopNavbar.css";
import logo from "../../images/logo.png";

const TopNavbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="headerLogo">
          <a href="/">
            <img src={logo} alt="logo of the site" />
          </a>
        </div>
        <div className="menuContainer">
          <ul className="menuItems">
            <li className="searchIcon">
              <a href="/">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-map-marker-alt"></i> Select Delivery
                Location
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-user"></i> Sign In
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://shodaimama.com/static/media/cart.95d8dc6c.svg"
                  className="cartIcon"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <div>
            <img
              src="https://shodaimama.com/static/media/leftArrow.ec08e6e9.svg"
              className="arrowIcon"
              alt=""
            />
            <div className="cart">
              <p className="artboard">
                <img
                  src="https://shodaimama.com/static/media/artBoard.cb23ac3c.svg"
                  alt=""
                />
                0
              </p>
              <p className="price"> ৳ 0</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNavbar;
