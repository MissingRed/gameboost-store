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
      <div className="error">
        <div className="error__animation">
          <Lottie options={{ animationData: errorItem, ...defaultOptions }} />
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
