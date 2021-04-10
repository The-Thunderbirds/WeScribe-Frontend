import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import RegisterForm from "./components/Register";
import Login from "./components/Login";
import Board from "./components/Board";
import Notes from "./components/Notes";
import MyNavbar from "./components/MyNavbar";
import NotFoundPage from "./components/NotFoundPage";

const BaseRouter = () => (
  <Switch>
    <Route path="/WeScribe_Frontend/board" component={Board} />
    <div>
      <MyNavbar />
      <Switch>
        <Route exact path="/WeScribe_Frontend/" component={Home} />
        <Route
          exact
          path="/WeScribe_Frontend/register"
          component={RegisterForm}
        />
        <Route exact path="/WeScribe_Frontend/login" component={Login} />
        <Route exact path="/WeScribe_Frontend/notes" component={Notes} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Switch>
);

export default BaseRouter;
