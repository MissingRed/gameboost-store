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
          <div className="gameOpen animate__animated animate__fadeIn animate__faster">
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
                <li className="gameOpen__options__list__item">RESUMEN</li>
                <li className="gameOpen__options__list__item">DESCRIPCIÓN</li>
                <li className="gameOpen__options__list__item">
                  REQUISITOS DEL SISTEMA
                </li>
              </ul>
            </div>
            <div className="gameOpen__info"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOpen;
