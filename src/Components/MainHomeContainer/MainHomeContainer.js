import React from "react";
import Banner from "../Banner/Banner";
import "./MainHomeContainer.css";

const MainHomeContainer = () => {
  return (
    <section className="container">
      <section className="containerContent">
        <Banner />

        {/* Commence of Product Heading */}
        <section className="preorder">
          <div className="leftBorder"></div>
          <p className="title">Preorder</p>
          <p className="subtitle">
            বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের
            বাজার সরবরাহ করা হয় ২-৭ দিনে ।
          </p>
        </section>
        {/* Termination of Product Heading */}

        {/* Commence of Preorder Product List */}
        <section className="preorderProductList">
          <a href="/">
            <div className="offerItemImg">
              <img
                src="https://bucket.shodaimama.com/files/sm/images/whXCzt1640081138967PO8UH7.jpeg"
                alt=""
              />
            </div>
            <div className="offerItemContent">
              <p>সদাইমামা বার-বি-কিউ ফেস্ট ...</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="#2196F3"
                  points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"
                ></polygon>
              </svg>
            </div>
          </a>
        </section>
        {/* Termination of Preorder Product List */}
      </section>
    </section>
  );
};

export default MainHomeContainer;
