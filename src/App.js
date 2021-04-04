import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import GameOpen from "./pages/gameOpen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/Game/:id" component={GameOpen} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
