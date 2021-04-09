import React, { useState, useEffect } from "react";
import "../styles/pages/home.scss";
import Sidebar from "../components/sidebar";
import DarkMode from "../components/DarkMode";
import GameList from "../components/gameList";
import Loading from "../components/loading";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [prim, setPrim] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const primarios = () => {
    fetch("http://localhost:1337/primarios")
      .then((res) => res.json())
      .then((data) => {
        setPrim(data[0].juegos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  };

  useEffect(() => {
    primarios();
  }, []);
  return (
    <>
      <div className="home ">
        <div className="home__sidebar">
          <Sidebar />
        </div>
        <div>
          <div className="home__content animate__animated animate__fadeIn animate__faster">
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
                  placeholder="Search games"
                  className="home__content__searchNav__container__input"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <DarkMode />
            </div>
            {notFound ? (
              "404"
            ) : loading ? (
              <Loading />
            ) : (
              <>
                <div className="home__content__topSection">
                  <Link
                    className="home__content__topSection__item"
                    to={`/Game/${prim[0].id}`}
                  >
                    <div className="home__content__topSection__item__figure">
                      <img
                        src={`http://localhost:1337${prim[0].Banner.url}`}
                        alt="product"
                        className="home__content__topSection__item__figure__img"
                      />
                    </div>
                    <div className="home__content__topSection__item__text">
                      {prim[0].Nombre}
                    </div>
                  </Link>
                  <Link
                    className="home__content__topSection__item"
                    to={`/Game/${prim[1].id}`}
                  >
                    <div className="home__content__topSection__item__figure">
                      <img
                        src={`http://localhost:1337${prim[1].Banner.url}`}
                        alt="product"
                        className="home__content__topSection__item__figure__img"
                      />
                    </div>
                    <div className="home__content__topSection__item__text">
                      {prim[1].Nombre}
                    </div>
                  </Link>
                  <Link
                    className="home__content__topSection__item"
                    to={`/Game/${prim[2].id}`}
                  >
                    <div className="home__content__topSection__item__figure">
                      <img
                        src={`http://localhost:1337${prim[2].Banner.url}`}
                        alt="product"
                        className="home__content__topSection__item__figure__img"
                      />
                    </div>
                    <div className="home__content__topSection__item__text">
                      {prim[2].Nombre}
                    </div>
                  </Link>
                </div>
                <div className="home__content__bottomSection">
                  <Link
                    className="home__content__bottomSection__item"
                    to={`/Game/${prim[3].id}`}
                  >
                    <div className="home__content__bottomSection__item__figure">
                      <img
                        src={`http://localhost:1337${prim[3].Banner.url}`}
                        alt="product"
                        className="home__content__bottomSection__item__figure__img"
                      />
                    </div>
                  </Link>
                  <Link
                    className="home__content__bottomSection__item"
                    to={`/Game/${prim[4].id}`}
                  >
                    <div className="home__content__bottomSection__item__figure">
                      <img
                        src={`http://localhost:1337${prim[4].Banner.url}`}
                        alt="product"
                        className="home__content__bottomSection__item__figure__img"
                      />
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
          <GameList search={search} />
        </div>
      </div>
    </>
  );
};

export default Home;
