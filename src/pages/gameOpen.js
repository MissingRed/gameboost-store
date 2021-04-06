import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "../styles/pages/gameOpen.scss";

const GameOpen = () => {
  let { id } = useParams();
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:1337/juegos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
        setLoading(false);
        // data.map((game) => {
        //   const name = game.Nombre;
        //   const description = game.Descripcion;
        //   const price = game.Precio;
        //   const cover = game.Caratula;
        //   const banner = game.Banner;
        //   array.push({ name, description, price, cover, banner });
        //   return true;
        // });
        // setGame(array);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [id]);
  return (
    <div className="home">
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div>
        {notFound ? (
          "404"
        ) : loading ? (
          "Cargando..."
        ) : (
          <div className="gameOpen">
            {/* <h1>{game.Nombre}</h1>
                <p>{game.Descripcion}</p>
                <p>{game.Precio}</p>
                <img
                  src={`http://localhost:1337${game.Caratula.url}`}
                  alt="Caratula"
                /> */}
            {/* <img
                src={`http://localhost:1337${game.Banner.url}`}
                alt="Banner"
                className="gameOpen__img"
              /> */}
            <div
              className="gameOpen__figure"
              style={{
                backgroundImage: `url(${`http://localhost:1337${game.Banner.url}`})`,
              }}
            >
              <div className="gameOpen__figure__shadow">
                <img
                  src={`http://localhost:1337${game.Caratula.url}`}
                  alt="Caratula"
                  className="gameOpen__figure__shadow__img"
                />
                <p>{game.Descripcion}</p>
              </div>
            </div>
            <div className="gameOpen__options"></div>
            <div className="gameOpen__info"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOpen;
