import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
