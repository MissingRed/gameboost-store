import React, { useContext } from "react";
import Sidebar from "../components/sidebar";
import { AuthContext } from "../database/auth";
import "../styles/pages/profile.scss";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="home">
      {console.log(currentUser)}
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div className="profile">
        <h2>Profile settings</h2>
        <div className="profile__account">
          <div className="profile__account__banner">
            <div className="profile__account__banner__logo">
              <img src="../icons/tool.svg" alt="tool" />
            </div>
            <div className="profile__account__banner__container">
              <p className="profile__account__banner__container__title">
                Account
              </p>
              <p className="profile__account__banner__container__text">
                Edit and manage your account details
              </p>
            </div>
          </div>
          <div className="profile__account__info">
            <div className="profile__account__info__user">
              <img
                src={currentUser.photoURL}
                alt="User"
                className="profile__account__info__user__img"
              />
              <div>
                <p className="profile__account__info__user__title">
                  {currentUser.displayName}
                </p>
                <p className="profile__account__info__user__text">
                  Video game buyer
                </p>
              </div>
            </div>
            <div className="profile__account__info__email">
              <p className="profile__account__info__email__title">Email</p>
              <p className="profile__account__info__email__text">
                {currentUser.email}
              </p>
            </div>
            <hr className="profile__account__info__hr" />
            <div className="profile__account__info__email">
              <p className="profile__account__info__email__title">Email</p>
              <p className="profile__account__info__email__text">
                {currentUser.email}
              </p>
            </div>
            <hr className="profile__account__info__hr" />
            <div className="profile__account__info__email">
              <p className="profile__account__info__email__title">Email</p>
              <p className="profile__account__info__email__text">
                {currentUser.email}
              </p>
            </div>
            <hr className="profile__account__info__hr" />
            <div className="profile__account__info__email">
              <p className="profile__account__info__email__title">Email</p>
              <p className="profile__account__info__email__text">
                {currentUser.email}
              </p>
            </div>
            <hr className="profile__account__info__hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
