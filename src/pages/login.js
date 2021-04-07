import React, { useContext, useCallback } from "react";
import DarkMode from "../components/DarkMode";
import "../styles/pages/login.scss";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../database/auth.js";
import app from "../database/base.js";

const Login = ({ history }) => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const googleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .catch((err) => {
        alert(err);
      });
  };

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/store");
      } catch (error) {
        alert("Error al inciar sesión");
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/store" />;
  }

  return (
    <div className="login">
      <div className="login__darkMode">
        <DarkMode />
      </div>
      <div className="login__container">
        <h1 className="login__container__title">GAMEBOOST</h1>
        <div className="login__container__content">
          <h3 className="login__container__content__title">LOGIN</h3>
          <form
            className="login__container__content__form"
            onSubmit={handleLogin}
          >
            <input
              type="email"
              className="login__container__content__form__input"
              placeholder="Email"
              name="email"
            />
            <input
              type="password"
              className="login__container__content__form__input"
              placeholder="Password"
              name="password"
            />
            <button
              className="login__container__content__form__button"
              type="submit"
            >
              CONTINUE
            </button>
            <span
              className="login__container__content__form__button__google"
              type="submit"
              onClick={googleAuth}
            >
              <img
                src="../icons/google-icon.svg"
                alt="Google"
                className="login__container__content__form__button__google__img"
              />
              Google
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
