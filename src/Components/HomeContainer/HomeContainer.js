import React from "react";
import MainHomeContainer from "../MainHomeContainer/MainHomeContainer";
import MenuBar from "../MenuBar/MenuBar";

const HomeContainer = () => {
  return (
    <section style={{ width: "calc(100% - 255px)" }}>
      <MenuBar />
      <MainHomeContainer />
    </section>
  );
};

export default HomeContainer;
