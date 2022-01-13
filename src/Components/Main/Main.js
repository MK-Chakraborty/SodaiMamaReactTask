import React from "react";
import HomeContainer from "../HomeContainer/HomeContainer";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <main style={{ display: "flex" }}>
      <Sidebar />
      <HomeContainer />
    </main>
  );
};

export default Main;
