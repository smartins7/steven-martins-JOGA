import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import FooterSoccer from "../components/FooterSoccer";

import arrowIcon from "../assets/icons/SVG/Icon-arrow-right.svg";
import CreateNewSoccer from "./CreateNewSoccer";

export default class Soccer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      soccerList: [],
      isFormActive: false,
    };
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  setFormState = () => {
    this.setState({
      isFormActive: !this.state.isFormActive,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/soccer")
      .then((response) => {
        this.setState({
          soccerList: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="soccer-all">
          {!this.state.isFormActive ? (
            <div className="hero-soccer">
              <div className="hero-soccer__container">
                <h1 className="hero-soccer__slogan">SOCCER</h1>
                <div className="hero-soccer__desktop">
                  <h2 className="hero-soccer__description">
                    Find local pick-up soccer games in your area below or create
                    your own.
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {!this.state.isFormActive ? (
            <div className="soccer">
              <div className="soccer__top-flex">
                <h1 className="soccer__title">Vancouver, BC:</h1>
              </div>
              <div className="soccer__tablet">
                <label className="soccer__tablet-item">DESCRIPTION</label>
                <div className="soccer__tablet-stats">
                  <label className="soccer__tablet-right">DATE</label>
                  <label className="soccer__tablet-right">TIME</label>
                  <label className="soccer__tablet-right">LOCATION</label>
                  {/* <label className="soccer__tablet-right soccer__tablet-spacing">
                  ADDRESS
                </label> */}
                </div>
              </div>
              {this.state.soccerList.map((soccer) => {
                return (
                  <div className="soccer__container" key={soccer.gameId}>
                    <div className="soccer__flex">
                      <label className="soccer__game-margin soccer__mobile">
                        DESCRIPTION
                      </label>
                      <div className="soccer__tablet-game">
                        <Link
                          key={soccer.gameId}
                          to={`/soccer/${soccer.gameId}`}
                          className="soccer__game"
                        >
                          <p className="soccer__shrink">{soccer.description}</p>
                        </Link>
                      </div>
                      <div className="soccer__tablet-stats">
                        <label className="soccer__mobile">DATE</label>
                        <p className="soccer__tablet-right">
                          {soccer.date}
                          {/* {new Date()} */}
                        </p>
                        <label className="soccer__mobile">TIME</label>
                        <p className="soccer__tablet-right">{soccer.time}</p>
                        <label className="soccer__mobile">LOCATION</label>
                        <p className="soccer__tablet-right">{soccer.park}</p>
                        {/* <label className="soccer__mobile">ADDRESS</label>
                      <p className="soccer__tablet-right arrow">
                        {soccer.address}
                      </p> */}
                      </div>
                    </div>
                    <div className="soccer__options">
                      <Link
                        key={soccer.gameId}
                        to={`/soccer/${soccer.gameId}`}
                        className="soccer__game"
                      >
                        <img src={arrowIcon} alt="Arrow Icon" />
                      </Link>
                      {/* {this.state.hide ? (
                    <div
                      className="soccer__remove"
                      onClick={() => this.removeClick(soccer.gameId)}
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
          ) : (
            ""
          )}
          {/* {this.state.isFormActive ? (
                          <p>Form is Active</p>
                        ) : (
                          <p>Form is not Active</p>
                        )} */}
          {this.state.isFormActive ? <CreateNewSoccer ref={this.myRef} /> : ""}
        </div>
        <FooterSoccer setFormState={this.setFormState} />
      </div>
    );
  }
}
