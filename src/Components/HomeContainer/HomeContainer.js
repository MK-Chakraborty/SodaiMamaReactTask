import React from "react";
import Footer from "../Footer/Footer";
import MainHomeContainer from "../MainHomeContainer/MainHomeContainer";
import MenuBar from "../MenuBar/MenuBar";

const HomeContainer = () => {
  return (
    <section style={{ width: "calc(100% - 255px)" }}>
      <MenuBar />
      <MainHomeContainer />
      <Footer />
    </section>
  );
};

export default HomeContainer;
