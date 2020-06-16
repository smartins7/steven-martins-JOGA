import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

import arrowIcon from "../assets/icons/SVG/Icon-arrow-right.svg";

export default class Basketball extends Component {
  state = {
    basketballList: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/basketball")
      .then((response) => {
        this.setState({
          basketballList: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  // removeClick = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/basketball/${id}`)
  //     .then(window.location.reload(false))
  //     .catch((err) => console.log(err));
  // };

  // kebabClick = (event) => {
  //   this.state.hide
  //     ? this.setState({ hide: false })
  //     : this.setState({ hide: true });
  // };

  // newItemClick = (event) => {
  //   let newItemObject = document.getElementsByClassName("new-item")[0];
  //   newItemObject.style.display = "block";
  // };

  render() {
    return (
      <div>
        <Header />
        <div className="hero-basketball">
          <div className="hero-basketball__container">
            <h1 className="hero-basketball__slogan">BASKETBALL</h1>
            <div className="hero-basketball__desktop">
              <h2 className="hero-basketball__description">
                Find local pick-up basketball games in your area below or create
                your own.
              </h2>
            </div>
          </div>
        </div>

        <div className="basketball">
          <div className="basketball__top-flex">
            <h1 className="basketball__title">Vancouver, BC:</h1>
          </div>
          <div className="basketball__tablet">
            <label className="basketball__tablet-item">DESCRIPTION</label>
            <div className="basketball__tablet-stats">
              <label className="basketball__tablet-right">DATE</label>
              <label className="basketball__tablet-right">TIME</label>
              <label className="basketball__tablet-right">LOCATION</label>
              <label className="basketball__tablet-right basketball__tablet-spacing">
                ADDRESS
              </label>
            </div>
          </div>

          {this.state.basketballList.map((basketball) => {
            return (
              <div className="basketball__container" key={basketball.gameId}>
                <div className="basketball__flex">
                  <label className="basketball__game-margin basketball__mobile">
                    DESCRIPTION
                  </label>
                  <div className="basketball__tablet-game">
                    <Link
                      key={basketball.gameId}
                      to={`/basketball/${basketball.gameId}`}
                      className="basketball__game"
                    >
                      <p className="basketball__shrink">
                        {basketball.description}
                      </p>
                    </Link>
                  </div>
                  <div className="basketball__tablet-stats">
                    <label className="basketball__mobile">DATE</label>
                    <p className="basketball__tablet-right">
                      {basketball.date}
                    </p>
                    <label className="basketball__mobile">TIME</label>
                    <p className="basketball__tablet-right">
                      {basketball.time}
                    </p>
                    <label className="basketball__mobile">LOCATION</label>
                    <p className="basketball__tablet-right">
                      {basketball.park}
                    </p>
                    <label className="basketball__mobile">ADDRESS</label>
                    <p className="basketball__tablet-right arrow">
                      {basketball.address}
                    </p>
                  </div>
                </div>
                <div className="basketball__options">
                  <Link
                    key={basketball.gameId}
                    to={`/basketball/${basketball.gameId}`}
                    className="basketball__game"
                  >
                    <img
                      src={arrowIcon}
                      alt="Arrow Icon"
                      // onClick={this.kebabClick}
                    />
                  </Link>
                  {/* {this.state.hide ? (
                    <div
                      className="basketball__remove"
                      onClick={() => this.removeClick(basketball.gameId)}
                      onMouseOut={this.kebabClick}
                    >
                      {" "}
                      Remove{" "}
                    </div>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
