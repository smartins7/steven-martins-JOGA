import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

import arrowIcon from "../assets/icons/SVG/Icon-arrow-right.svg";

export default function Soccer() {
  //   state = {
  //     soccerList: [],
  //   };

  // componentDidMount() {
  //     axios
  //         .get("http://localhost:5000/soccer")
  //         .then((response) => {
  //             this.setState({
  //                 soccerList: response.data,
  //             });
  //         })
  //         .catch((err) => console.log(err));
  // }
  // render() {
  return (
    <>
      <Header />
      <section className="hero-soccer">
        <div className="hero-soccer__container">
          <h1 className="hero-soccer__slogan">SOCCER</h1>
          <div className="hero-soccer__desktop">
            <h2 className="hero-soccer__description">
              Find local pick-up soccer games in your area below.
            </h2>
          </div>
        </div>
      </section>

      <section className="soccer">
        <div className="soccer__top-flex">
          <h1 className="soccer__title">Vancouver, BC:</h1>
        </div>
        <div className="soccer__tablet">
          <label className="soccer__tablet-item soccer__tablet-spacing">
            DESCRIPTION
          </label>
          <label className="soccer__tablet-item">DATE</label>
          {/* <div className="soccer__tablet-stats"> */}
          <label className="soccer__tablet-item">TIME</label>
          <label className="soccer__tablet-item">LOCATION</label>
          <label className="soccer__tablet-item">ADDRESS</label>
          <img
            className="soccer__mobile-arrow"
            src={arrowIcon}
            alt="Arrow Icon"
            //   onClick={this.arrowClick}
          />
          {/* </div> */}
        </div>

        {this.state.soccerList.map((soccer) => {
          return (
            <div
              className="soccer__container"
              //   key={inv.productId}
            >
              <div className="soccer__tablet-stats">
                <label className="soccer__mobile">DESCRIPTION</label>
                <p className="soccer__tablet-item">{soccer.description}</p>
                <label className="soccer__mobile">DATE</label>
                <p className="soccer__tablet-item">{/* {inv.lastOrdered} */}</p>
                <label className="soccer__mobile">TIME</label>
                <p className="soccer__tablet-item">{/* {inv.lastOrdered} */}</p>
                <label className="soccer__mobile">LOCATION</label>
                <p className="soccer__tablet-item">{/* {inv.location} */}</p>
                <label className="soccer__mobile">ADDRESS</label>
                <p className="soccer__tablet-item">{/* {inv.quantity} */}</p>
              </div>
              <div className="soccer__tablet-icon">
                <img
                  className="soccer__arrow"
                  src={arrowIcon}
                  alt="Arrow Icon"
                  //   onClick={this.arrowClick}
                />
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
// }
