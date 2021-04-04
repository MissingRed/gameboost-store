import React, { useState, useEffect } from "react";
import "../styles/components/gameList.scss";
import Game from "../components/game";
const GameList = () => {
  const [games, setGames] = useState([]);

  const allGames = () => {
    fetch("http://localhost:1337/juegos")
      .then((res) => res.json())
      .then((data) => {
        const array = [];
        data.map((game) => {
          const id = game._id;
          const name = game.Nombre;
          const price = game.Precio;
          const cover = game.Caratula;

          array.push({ id, name, price, cover });
          return true;
        });
        setGames(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    allGames();
  }, []);

  return (
    <div className="gameList">
      <h2>Others</h2>
      <div className="gameList__container">
        {games.map((res) => (
          <Game
            key={res.id}
            name={res.name}
            price={res.price}
            cover={res.cover}
            link={res.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;