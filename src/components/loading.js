import React from "react";
import Lottie from "react-lottie";
import load from "./loader.json";
import "../styles/components/loading.scss";
import DarkMode from "../components/DarkMode";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading">
      <div className="loading__darkMode">
        <DarkMode />
      </div>
      <div className="loading__loop">
        <Lottie options={{ animationData: load, ...defaultOptions }} />
      </div>
    </div>
  );
};

export default Loading;
