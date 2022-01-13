import React from "react";
import "./Sidebar.css";
import homeIcon from "../../images/homeIcon.png";
import freshIcon from "../../images/freshIcon.png";
import regularIcon from "../../images/regularIcon.png";
import preordersIcon from "../../images/preordersIcon.png";
import hygieneIcon from "../../images/hygieneIcon.png";
import breakfastIcon from "../../images/breakfastIcon.png";
import cookingIcon from "../../images/cookingIcon.png";
import meatFishIcon from "../../images/meatFishIcon.png";
import vegeIcon from "../../images/vegeIcon.png";
import dairyIcon from "../../images/dairyIcon.png";
import frozenIcon from "../../images/frozenIcon.png";
import beverages from "../../images/beverages.png";
import babyProducts from "../../images/babyProducts.png";
import beautyIcon from "../../images/beautyIcon.png";
import kitchenIcon from "../../images/kitchenIcon.png";
import stationary from "../../images/stationary.png";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <section className="leftSidebar">
        <div className="sidebarItem">
          <img src={homeIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Home</p>
        </div>
        <div className="sidebarItem">
          <img src={freshIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Fresh</p>
        </div>
        <div className="sidebarItem">
          <img src={regularIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Regular</p>
        </div>
        <div className="sidebarItem">
          <img src={preordersIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Preorder</p>
        </div>
        <div className="sidebarDivider">
          <p className="sidebarDividerText">
            Explore <span>Shodai</span>
            <span className="lastname">Mama</span>
          </p>
        </div>
        <div className="sidebarItem">
          <img src={hygieneIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Hygiene</p>
        </div>
        <div className="sidebarItem">
          <img src={breakfastIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Breakfast & Snacks</p>
        </div>
        <div className="sidebarItem">
          <img src={cookingIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Cooking</p>
        </div>
        <div className="sidebarItem">
          <img src={meatFishIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Meat & Fish</p>
        </div>
        <div className="sidebarItem">
          <img src={vegeIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Fruits & Vegetables</p>
        </div>
        <div className="sidebarItem">
          <img src={dairyIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Dairy</p>
        </div>
        <div className="sidebarItem">
          <img src={frozenIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Frozen & Canned</p>
        </div>
        <div className="sidebarItem">
          <img src={beverages} className="sidebarImg" alt="" />
          <p className="sidebarText">Beverages</p>
        </div>
        <div className="sidebarItem">
          <img src={babyProducts} className="sidebarImg" alt="" />
          <p className="sidebarText">Kids care</p>
        </div>
        <div className="sidebarItem">
          <img src={beautyIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Personal Care</p>
        </div>
        <div className="sidebarItem">
          <img src={kitchenIcon} className="sidebarImg" alt="" />
          <p className="sidebarText">Home & Kitchen</p>
        </div>
        <div className="sidebarItem" style={{ marginBottom: "20px" }}>
          <img src={stationary} className="sidebarImg" alt="" />
          <p className="sidebarText">Stationary</p>
        </div>
      </section>
    </section>
  );
};

export default Sidebar;
