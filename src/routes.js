import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import RegisterForm from "./components/Register";
import Login from "./components/Login";
import Board from "./components/Board";
import MyNavbar from "./components/MyNavbar";

const BaseRouter = () => (
  <Switch>
    <Route path="/WeScribe-Frontend/board" component={Board} />
    <div>
      <MyNavbar />
      <Switch>
        <Route exact path="/WeScribe-Frontend/" component={Home} />
        <Route
          exact
          path="/WeScribe-Frontend/register"
          component={RegisterForm}
        />
        <Route exact path="/WeScribe-Frontend/login" component={Login} />
      </Switch>
    </div>
  </Switch>
);

export default BaseRouter;
