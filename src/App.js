import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import GameOpen from "./pages/gameOpen";
import Login from "./pages/login";
import { AuthProvider } from "./database/auth";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/store" component={home} />
            <Route exact path="/Game/:id" component={GameOpen} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
