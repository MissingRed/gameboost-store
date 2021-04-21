import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "../styles/pages/gameOpen.scss";
import DarkMode from "../components/DarkMode";
import PaypalCheckoutButton from "../components/paypalCheckoutButton";
import Loading from "../components/loading";

const GameOpen = () => {
  let { id } = useParams();
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const order = {
    customer: "123456",
    total: game.Precio,
    items: [
      {
        sku: game._id,
        name: game.Nombre,
        price: game.Precio,
        quantity: 1,
        currency: "USD",
      },
      // {
      //   sku: "99",
      //   name: "Camisa JS",
      //   price: "50.00",
      //   quantity: 1,
      //   currency: "USD",
      // },
    ],
  };

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
          <Loading />
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
                <p className="gameOpen__figure__shadow__description">
                  {game.Descripcion}
                </p>
                <p className="gameOpen__figure__shadow__price">
                  US$ {game.Precio}
                </p>
                <div className="gameOpen__figure__shadow__paypal">
                  <PaypalCheckoutButton order={order} />
                </div>
              </div>
              <div className="gameOpen__figure__lateral">
                <div className="gameOpen__figure__lateral__darkMode">
                  <DarkMode />
                </div>
              </div>
            </div>
            <div className="gameOpen__options">
              <ul className="gameOpen__options__list">
                <li className="gameOpen__options__list__item selected">
                  RESUME
                </li>
                <li className="gameOpen__options__list__item">DESCRIPTION</li>
                <li className="gameOpen__options__list__item">
                  SYSTEM REQUIREMENTS
                </li>
              </ul>
            </div>
            <div className="gameOpen__info">
              <p className="gameOpen__info__title">Resumen</p>
              <div className="gameOpen__info__container">
                <div className="gameOpen__info__container__section">
                  <p>Genero</p>
                  <p>{game.Genero}</p>
                  <p>Fecha de lanzamiento</p>
                  <p>{game.Fecha_lanzamiento}</p>
                  <p>Calificación</p>
                  <p>{game.Calificacion}</p>
                  <p>Editor</p>
                  <p>{game.Editor}</p>
                </div>
                <div className="gameOpen__info__container__section">
                  <p>Desarrollador</p>
                  <p>{game.Desarrollador}</p>
                  <p>Idioma</p>
                  <p>{game.Idiomas}</p>
                  <p>Enlaces del juego</p>
                  <p>{game.Mas_info}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOpen;
