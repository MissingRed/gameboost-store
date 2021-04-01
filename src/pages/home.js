import React from "react";
import "../styles/pages/home.scss";
import Sidebar from "../components/sidebar";

const home = () => {
  return (
    <>
      <div className="home">
        <div className="home__sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default home;
