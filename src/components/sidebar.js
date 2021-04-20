import React, { useContext, useState } from "react";
import "../styles/components/sidebar.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../database/auth";
import app from "../database/base.js";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__padding">
        <h1 className="sidebar__title">GAMEBOOST</h1>
        <div className="sidebar__container">
          <ul className="sidebar__container__list">
            <li className="sidebar__container__list__item">
              <img
                src="../icons/shopping-bag.svg"
                alt="store"
                className="sidebar__container__list__item__img"
              />
              <NavLink
                to="/store"
                className="sidebar__container__list__item__a selected"
              >
                Store
              </NavLink>
            </li>
            <li className="sidebar__container__list__item">
              <img
                src="../icons/bookmark.svg"
                alt="favorites"
                className="sidebar__container__list__item__img"
              />
              <NavLink to="/" className="sidebar__container__list__item__a">
                Favorites
              </NavLink>
            </li>
            <li className="sidebar__container__list__item">
              <img
                src="../icons/user.svg"
                alt="profile"
                className="sidebar__container__list__item__img"
              />
              <NavLink
                to="/profile"
                className="sidebar__container__list__item__a"
              >
                Profile
              </NavLink>
            </li>
            <li className="sidebar__container__list__item">
              <img
                src="../icons/shopping-cart.svg"
                alt="purchases"
                className="sidebar__container__list__item__img"
              />
              <NavLink to="/" className="sidebar__container__list__item__a">
                Purchases
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {openProfile ? (
        <div className="sidebar__container__user__modal">
          <button onClick={() => app.auth().signOut()}>Log Out</button>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__container__user">
        <div className="sidebar__container__user__content">
          <img
            src={currentUser.photoURL}
            alt="User"
            className="sidebar__container__user__img"
          />
          <div>
            <p className="sidebar__container__user__name">
              {currentUser.displayName}
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sidebar__container__user__svg"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <polyline points="17 11 12 6 7 11"></polyline>
          <polyline points="17 18 12 13 7 18"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
