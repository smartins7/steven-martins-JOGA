import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import CommentsStreetHockey from "./CommentsStreetHockey";
import deleteGame from "../assets/icons/SVG/delete1.svg";
// import kebab from "../assets/icons/SVG/Icon-kebab-default.svg";

export default class StreetHockeyDetails extends Component {
  state = {
    game: [],
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:5000/street-hockey")
      .then((response) => {
        const res = response.data.filter((event) => {
          return event.gameId === id;
        });
        this.setState({
          game: res,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/street-hockey/${id}`)
      .then(window.location.reload(false))
      // .then(window.location.goBack())
      // This won't work because not passing props
      //this.props.history.goBack();
      // .then((res) => {
      //   props.history.replace("/");
      // })
      .catch((err) => console.log(err));
  };

  iconClick = (event) => {
    this.state.hide
      ? this.setState({ hide: false })
      : this.setState({ hide: true });
  };

  render() {
    return (
      <>
        <Header />
        <div className="game">
          {this.state.game.map((event) => {
            return (
              <div className="game__container" key={event.gameId}>
                <div className="game__header">
                  <h1 className="game__label-page">Street-Hockey</h1>
                  <div className="game__mobile-top">
                    <div className="game__status">
                      <span className="game__status-text">Vacant</span>
                    </div>
                    <div className="game__icons">
                      <img
                        className="game__delete"
                        src={deleteGame}
                        alt="Delete Icon"
                        onClick={this.iconClick}
                      />
                      {this.state.hide ? (
                        <div
                          className="game__remove"
                          onClick={() => this.deleteClick(event.gameId)}
                          onMouseOut={this.iconClick}
                        >
                          {" "}
                          Delete{" "}
                        </div>
                      ) : (
                        ""
                      )}
                      {/* <img
                        className="game__kebab"
                        src={kebab}
                        alt="kebab Icon"
                      /> */}
                    </div>
                  </div>
                </div>
                <hr className="game__hr"></hr>

                <div className="game__description-details-container">
                  <div className="game__description-container">
                    <h4 className="game__label-description">
                      GAME DESCRIPTION
                    </h4>
                    <p className="game__event-description">
                      {event.description}
                    </p>
                  </div>
                  <div className="game__details-container">
                    <div className="game__info-details">
                      <div className="game__label-value-container">
                        <h4 className="game__label-date">DATE</h4>
                        <p className="game__date">{event.date}</p>
                      </div>
                      <div className="game__label-value-container">
                        <h4 className="game__label-location">LOCATION</h4>
                        <p className="game__location">{event.park}</p>
                      </div>
                      <div className="game__label-value-container">
                        <h4 className="game__label-time">TIME</h4>
                        <p className="game__time">{event.time}</p>
                      </div>

                      <div className="game__label-value-container">
                        <h4 className="game__label-address">ADDRESS</h4>
                        <p className="game__address">{event.address}</p>
                      </div>

                      <div className="game__label-value-container">
                        <h4 className="game__label-city">CITY</h4>
                        <p className="game__city">{event.city}</p>
                      </div>

                      <div className="game__label-value-container">
                        <h4 className="game__label-organizer">ORGANIZER</h4>
                        <p className="game__organizer">{event.organizer}</p>
                      </div>
                      <div className="game__label-value-container">
                        <h4 className="game__label-contact">CONTACT</h4>
                        <p className="game__contact">{event.contact}</p>
                      </div>
                      <div className="game__label-value-container">
                        <h4 className="game__label-email">EMAIL</h4>
                        <p className="game__email">{event.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="game__hr"></hr>
              </div>
            );
          })}
          {/* <CommentsStreetHockey eventId={this.props.match.params.id} /> */}
        </div>
        <Footer />
      </>
    );
  }
}
