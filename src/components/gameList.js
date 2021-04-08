import React, { useState, useEffect } from "react";
import "../styles/components/gameList.scss";
import Game from "../components/game";

const GameList = ({ search }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);

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
          const caratula = `http://localhost:1337${cover.url}`;

          array.push({ id, name, price, caratula });
          return true;
        });
        setGames(array);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    allGames();
  }, []);

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, games]);

  if (loading) {
    return <p>Loading games...</p>;
  }

  return (
    <div className="gameList">
      <h2 className="gameList__title">Others</h2>
      <div className="gameList__container">
        {filteredGames.map((game, idx) => (
          <GameDetail key={idx} {...game} />
        ))}
      </div>
    </div>
  );
};

const GameDetail = (props) => {
  const { id, name, price, caratula } = props;

  return <Game key={id} name={name} price={price} cover={caratula} link={id} />;
};

export default GameList;
