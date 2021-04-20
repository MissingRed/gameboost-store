import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";

import GameOpen from "./pages/gameOpen";
import Login from "./pages/login";
import ErrorPage from "./components/errorPage";

import { AuthProvider } from "./database/auth";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/store" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/Game/:id" component={GameOpen} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
