import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./MainHomeContainer.css";
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import ProductCard from "../ProductCard/ProductCard";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/handleLocalStorage";

const MainHomeContainer = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // fatching data from fakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // fetching cart products form localStorage
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const id in savedCart) {
        const addedproduct = products.find((product) => product.id == id);
        if (addedproduct) {
          const quantity = savedCart[id];
          addedproduct.quantity = quantity;
          storedCart.push(addedproduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  // event listener for product button click
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // JSON.stringify(product)
    addToDb(product.id);
  };

  return (
    <section className="container">
      <section className="containerContent">
        <Banner />

        {/* Commence of Cart Section */}
        <section className="sectionHeading cartHeading">
          <p className="headingText">
            Your Cart <i className="fas fa-shopping-cart"></i>
          </p>
        </section>
        <section className="homeCart">
          {cart.length ? (
            <Cart cart={cart} />
          ) : (
            <p>Your Selected Products will have Displayed Here!</p>
          )}
        </section>
        {/* Termination of Cart Section */}

        {/* Commence of Product Heading */}
        <section className="preorder">
          <div className="leftBorder"></div>
          <p className="title">Preorder</p>
          <p className="subtitle">
            ??????????????? ???????????? ???????????? ?????? ?????????????????? ?????????????????? ????????????, ?????????????????????????????? ??????????????? ????????? ???????????????
            ??????????????? ?????????????????? ????????? ?????? ???-??? ???????????? ???
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
              <p>???????????????????????? ?????????-??????-????????? ??????????????? ...</p>
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

        {/* Commence of Product Heading */}
        <section className="preorder">
          <div className="leftBorder"></div>
          <p className="title">Products</p>
          <p className="subtitle">
            ???????????? ??????????????? ??????????????? ?????? ?????? ??????????????????????????? ??????????????? ??????????????????
          </p>
        </section>
        {/* Termination of Product Heading */}

        {/* Commence of regular products List */}
        <section className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </section>
        {/* Termination of regular products List */}

        {/* Commence of Product Catagory List  */}
        <section className="sectionHeading">
          <p className="headingText">Shodaimama Categories</p>
        </section>

        <section className="catagories">
          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898877195_13897913_pzqI9rNe_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Breakfast &amp; Snacks</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899365843_78289539_xABdWVP9_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Cooking</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624898961192_90522818_KghL8x1J_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Meat &amp; Fish</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899307994_65454848_CIwz48po_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Fruits &amp; Vegetables</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899351387_03874966_LxV51z7O_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Dairy</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899323584_96693783_5krgoIJF_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Frozen &amp; Canned</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899334805_88037401_ydaYkVYO_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Beverages</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899294952_67754284_UJNyG34G_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Kids care</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624899416181_88846315_slIcWkwD_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Personal Care</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978022808_01668484_NxondpNz_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Home &amp; Kitchen</p>
            </div>
          </a>

          <a href="/">
            <div className="categoryItem">
              <div className="categoryImage">
                <img
                  src="https://bucket.shodaimama.com/files/sm/images/smcat_1624978447975_34684347_cjsf6yrN_SASSMIS.png"
                  alt=""
                />
              </div>
              <p className="categoryName">Stationary</p>
            </div>
          </a>
        </section>
        {/* Termination of Product Catagory List */}

        {/* Commence of Service Section  */}
        <section className="sectionHeading">
          <p className="headingText">Why ShodaiMama</p>
        </section>

        <section className="services">
          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img src={service1} alt="" />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">
                Hassle Free Grocery Shopping
              </p>
              <p className="serviceSubContentTitle">
                Avoid the crowds and long queues to get your daily needs.
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img
                src="https://shodaimama.com/static/media/freshness-refined.b739103f.png"
                alt=""
              />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">Freshness Redefined</p>
              <p className="serviceSubContentTitle">
                Fresh groceries from trusted and hygienic sources to your
                doorstep.
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img
                src="https://shodaimama.com/static/media/on-time-door-step-delevary.bbe0d749.png"
                alt=""
              />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">On-time doorstep delivery</p>
              <p className="serviceSubContentTitle">
                Solution to your needs just on time.
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img
                src="https://shodaimama.com/static/media/fast-and-flawless-payment.e84934c7.png"
                alt=""
              />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">
                Fast &amp; Flawless payment system
              </p>
              <p className="serviceSubContentTitle">
                All secured payment gateways to ensure stress free fast payment.
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img src={service2} alt="" />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">Customer Centric Approach </p>
              <p className="serviceSubContentTitle">
                For us, our customer needs comes first. Our Aim is to offer the
                very Best quality, at the best price and deals.{" "}
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img
                src="https://shodaimama.com/static/media/value-for-money.a1ed3a72.png"
                alt=""
              />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">Value for Money</p>
              <p className="serviceSubContentTitle">
                Commited to ensure that your hard-earned money are spent wisely.
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img
                src="https://shodaimama.com/static/media/uncompromised-dedicated-service.f13021df.png"
                alt=""
              />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">Prompt Query Resolve</p>
              <p className="serviceSubContentTitle">
                Not just answering your calls, rather a substantial solution to
                all your queries.
              </p>
            </div>
          </div>

          <div className="serviceItem">
            <div className="serviceItemIcon">
              <img
                src="https://shodaimama.com/static/media/stress-free-refund.b1606821.png"
                alt=""
              />
            </div>
            <div className="serviceItemContent">
              <p className="serviceContentTitle">
                Stress Free Refund/Return policy
              </p>
              <p className="serviceSubContentTitle">
                With proper validation your return and refund will be as smooth
                as your shopping experience with us.
              </p>
            </div>
          </div>
        </section>
        {/* Termination of Service Section */}
      </section>
    </section>
  );
};

export default MainHomeContainer;
