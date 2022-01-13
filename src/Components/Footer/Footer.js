import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <section className="footerContainer">
      <section className="footerContainerContent">
        <section className="footerContent">
          <section className="footerLogoArea">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <div className="socialMedia">
              <a href="/">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="/">
                <i className="fab fa-youtube-square"></i>
              </a>
            </div>
            <a href="/">
              <div className="donwloadBtn">
                <p>Shodaimama App</p>
                <div className="overlay movingOverlay"></div>
              </div>
            </a>
            <p className="copyright">
              <i>ShodaiMama © 2021</i>
            </p>
          </section>

          <section className="usefullLinkArea">
            <p className="footerHeading">Useful links</p>
            <ul className="footerMenu">
              <li className="footerMenuItem">
                <a href="/">About ShodaiMama</a>
              </li>
              <li className="footerMenuItem">
                <a href="/">FAQ</a>
              </li>
              <li className="footerMenuItem">
                <a href="/">Contact Us</a>
              </li>
              <li className="footerMenuItem">
                <a href="/">Career</a>
              </li>
            </ul>
          </section>

          <section className="helpfullLinkArea">
            <p className="footerHeading">Helpful Links</p>
            <ul className="footerMenu">
              <li className="footerMenuItem">
                <a href="/">Why Choose ShodaiMama</a>
              </li>
              <li className="footerMenuItem">
                <a href="/">Privacy policy</a>
              </li>
              <li className="footerMenuItem">
                <a href="/">Terms & Condition</a>
              </li>
              <li className="footerMenuItem">
                <a href="/">Delivery, Return & Refund</a>
              </li>
            </ul>
          </section>

          <section className="contactArea">
            <p className="footerHeading">Contact Us</p>
            <ul className="footerMenu">
              <li className="footerMenuItem contact">
                <i className="fas fa-map-marker-alt ftIcon"></i>{" "}
                <a>House 18, block: k, South Banasree, Dhaka</a>
              </li>
              <li className="footerMenuItem contact">
                <i className="far fa-envelope ftIcon"></i>
                <a>info@shodaimama.com</a>
              </li>
              <li className="footerMenuItem contact">
                <i className="fas fa-headset ftIcon"></i>
                <a>support@shodaimama.com</a>
              </li>
            </ul>
          </section>
        </section>

        <section className="footerPayment">
          <img
            src="https://shodaimama.com/static/media/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png"
            alt=""
          />
        </section>
      </section>
    </section>
  );
};

export default Footer;
