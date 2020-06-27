import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import FooterBasketball from "../components/FooterBasketball";

import arrowIcon from "../assets/icons/SVG/Icon-arrow-right.svg";
import CreateNewBasketball from "./CreateNewBasketball";

export default class Basketball extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      basketballList: [],
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
      .get("http://localhost:5000/basketball")
      .then((response) => {
        this.setState({
          basketballList: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="basketball-all">
          {!this.state.isFormActive ? (
            <div className="hero-basketball">
              <div className="hero-basketball__container">
                <h1 className="hero-basketball__slogan">BASKETBALL</h1>
                <div className="hero-basketball__desktop">
                  <h2 className="hero-basketball__description">
                    Find local pick-up basketball games in your area below or
                    create your own.
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {!this.state.isFormActive ? (
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
                </div>
              </div>
              {this.state.basketballList.map((basketball) => {
                return (
                  <div
                    className="basketball__container"
                    key={basketball.gameId}
                  >
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
                      </div>
                    </div>
                    <div className="basketball__options">
                      <Link
                        key={basketball.gameId}
                        to={`/basketball/${basketball.gameId}`}
                        className="basketball__game"
                      >
                        <img src={arrowIcon} alt="Arrow Icon" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {this.state.isFormActive ? (
            <CreateNewBasketball ref={this.myRef} />
          ) : (
            ""
          )}
        </div>
        <FooterBasketball setFormState={this.setFormState} />
      </div>
    );
  }
}
