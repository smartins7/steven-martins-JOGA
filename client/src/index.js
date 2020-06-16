import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Soccer from "./components/Soccer";
import SoccerDetails from "./components/SoccerDetails";
import Basketball from "./components/Basketball";
import BasketballDetails from "./components/BasketballDetails";
import StreetHockey from "./components/StreetHockey";
import StreetHockeyDetails from "./components/StreetHockeyDetails";

//Setting Up Routes

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/soccer" exact component={Soccer} />
      <Route path="/soccer/:id" exact component={SoccerDetails} />
      <Route path="/basketball" exact component={Basketball} />
      <Route path="/basketball/:id" exact component={BasketballDetails} />
      <Route path="/street-hockey" exact component={StreetHockey} />
      <Route path="/street-hockey/:id" exact component={StreetHockeyDetails} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
