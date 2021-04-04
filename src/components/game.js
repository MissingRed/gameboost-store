import React from "react";
import "../styles/components/game.scss";
import { Link } from "react-router-dom";

const Game = ({ name, price, cover, link }) => {
  return (
    <Link className="game" to={`/Game/${link}`}>
      <div className="game__figure">
        <img src={cover} alt="Game" className="game__figure__img" />
      </div>
      <p className="game__title">{name}</p>
      <p className="game__price">US$ {price}</p>
    </Link>
  );
};

export default Game;
