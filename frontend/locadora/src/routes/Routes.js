import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "../home/Home"
import Login from "../customer/Login";
import Movie from "../movie/Movie";
import RegisterCustomer from "../customer/RegisterCustomer";

const Routes = () => (
  <Router>
      <Switch>
        <Route exact path="/register" component={RegisterCustomer}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/movie" component={Movie}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    </Router>
  );

  export default Routes;