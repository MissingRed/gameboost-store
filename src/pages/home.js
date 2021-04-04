import React from "react";
import "../styles/pages/home.scss";
import Sidebar from "../components/sidebar";
import DarkMode from "../components/DarkMode";
import GameList from "../components/gameList";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__sidebar">
          <Sidebar />
        </div>
        <div>
          <div className="home__content">
            <div className="home__content__searchNav">
              <div className="home__content__searchNav__container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#767884"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home__content__searchNav__container__svg"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  placeholder="Search Games"
                  className="home__content__searchNav__container__input"
                />
              </div>
              <DarkMode />
            </div>
            <div className="home__content__topSection">
              <div className="home__content__topSection__item">
                <div className="home__content__topSection__item__figure">
                  <img
                    src="img/forza.jpg"
                    alt="product"
                    className="home__content__topSection__item__figure__img"
                  />
                </div>
                <div className="home__content__topSection__item__text">
                  Forza Horizon 4
                </div>
              </div>
              <div className="home__content__topSection__item">
                <div className="home__content__topSection__item__figure">
                  <img
                    src="img/cyber.jpg"
                    alt="product"
                    className="home__content__topSection__item__figure__img"
                  />
                </div>
                <div className="home__content__topSection__item__text">
                  Cyberpunk 2077
                </div>
              </div>
              <div className="home__content__topSection__item">
                <div className="home__content__topSection__item__figure">
                  <img
                    src="img/fall.jpg"
                    alt="product"
                    className="home__content__topSection__item__figure__img"
                  />
                </div>
                <div className="home__content__topSection__item__text">
                  Fall Guys: Ultimate Knockout
                </div>
              </div>
            </div>
            <div className="home__content__bottomSection">
              <div className="home__content__bottomSection__item">
                <div className="home__content__bottomSection__item__figure">
                  <img
                    src="img/ass.jpg"
                    alt="product"
                    className="home__content__bottomSection__item__figure__img"
                  />
                </div>
              </div>
              <div className="home__content__bottomSection__item">
                <div className="home__content__bottomSection__item__figure">
                  <img
                    src="img/hit.png"
                    alt="product"
                    className="home__content__bottomSection__item__figure__img"
                  />
                </div>
              </div>
            </div>
          </div>
          <GameList />
        </div>
      </div>
    </>
  );
};

export default Home;
