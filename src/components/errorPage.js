import React from "react";
import "../styles/components/errorPage.scss";
import Lottie from "react-lottie";
import errorItem from "./errorItem.json";
import Sidebar from "../components/sidebar";

const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="home">
        <div className="home__sidebar">
          <Sidebar />
        </div>

        <div className="error">
          <div className="error__animation">
            <Lottie options={{ animationData: errorItem, ...defaultOptions }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
