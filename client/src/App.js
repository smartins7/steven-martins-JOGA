import React, { Component } from "react";
// import axios from "axios";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
//   withRouter,
// } from "react-router-dom";
import "./style/main.css";
import MainPage from "./components/MainPage";
// import Soccer from "./components/Soccer";
// import Basketball from "./components/Basketball";
// import StreetHockey from "./components/StreetHockey";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}
