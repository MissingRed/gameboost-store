import React from "react";
import "../styles/components/sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">GAMEBOOST</h1>
      <div className="sidebar__container">
        <ul className="sidebar__container__list">
          <li className="sidebar__container__list__item">
            <img
              src="./icons/shopping-bag.svg"
              alt="store"
              className="sidebar__container__list__item__img"
            />
            <NavLink
              to="/"
              className="sidebar__container__list__item__a selected"
            >
              Store
            </NavLink>
          </li>
          <li className="sidebar__container__list__item">
            <img
              src="./icons/bookmark.svg"
              alt="favorites"
              className="sidebar__container__list__item__img"
            />
            <NavLink to="/" className="sidebar__container__list__item__a">
              Favorites
            </NavLink>
          </li>
          <li className="sidebar__container__list__item">
            <img
              src="./icons/user.svg"
              alt="profile"
              className="sidebar__container__list__item__img"
            />
            <NavLink to="/" className="sidebar__container__list__item__a">
              Profile
            </NavLink>
          </li>
          <li className="sidebar__container__list__item">
            <img
              src="./icons/shopping-cart.svg"
              alt="purchases"
              className="sidebar__container__list__item__img"
            />
            <NavLink to="/" className="sidebar__container__list__item__a">
              Purchases
            </NavLink>
          </li>
        </ul>
        <div className="sidebar__container__user">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GiE8kNJbC9CB967CJShTcUPm4Q7A8kJRJAkUqa2SA=s96-c"
            alt="User"
            className="sidebar__container__user__img"
          />
          <p className="sidebar__container__user__name">Daniel Rodriguez</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
