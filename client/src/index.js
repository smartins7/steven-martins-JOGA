import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Soccer from "./components/Soccer";
// import Basketball from "./components/Basketball";
// import StreetHockey from "./components/StreetHockey";

//Setting Up Routes

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/soccer" component={Soccer} />
      {/* <Route path="/soccer/:id" component={SoccerDetails} /> */}
      {/* <Route path="/basketball" component={Basketball} /> */}
      {/* <Route path="/basketball/:id" component={BasketballDetails} /> */}
      {/* <Route path="/street-hockey" component={StreetHockey} /> */}
      {/* <Route path="/street-hockey/:id" component={StreetHockeyDetails} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
