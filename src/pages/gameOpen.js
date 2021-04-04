import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameOpen = () => {
  let { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    fetch(`http://localhost:1337/juegos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
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
      });
  }, [id]);
  return (
    <div>
      <h1>{game.Nombre}</h1>
      <p>{game.Descripcion}</p>
      <p>{game.Precio}</p>
      <img src={game.Caratula} alt="Caratula" />
      <img src={game.Banner} alt="Banner" />
    </div>
  );
};

export default GameOpen;
