import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentsSoccer from "./CommentsSoccer";

export default class SoccerDetails extends Component {
  state = {
    game: [],
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:5000/soccer")
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
  render() {
    return (
      <>
        <Header />
        <div className="game">
          {this.state.game.map((event) => {
            return (
              <div className="game__container" key={event.gameId}>
                <div className="game__header">
                  <h1 className="game__label-page">Soccer</h1>
                  <div className="game__status">
                    <span className="game__status-text">
                      {event.eventStatus}
                    </span>
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
                    </div>

                    <h4 className="game__label-time">TIME</h4>
                    <p className="game__time">{event.time}</p>

                    <h4 className="game__label-address">ADDRESS</h4>
                    <p className="game__address">{event.address}</p>

                    <h4 className="game__label-city">CITY</h4>
                    <p className="game__city">{event.city}</p>

                    <h4 className="game__label-organizer">ORGANIZER</h4>
                    <p className="game__organizer">{event.organizer}</p>

                    <h4 className="game__label-contact">CONTACT</h4>
                    <p className="game__contact">{event.contact}</p>

                    <h4 className="game__label-email">EMAIL</h4>
                    <p className="game__email">{event.email}</p>
                  </div>
                </div>
                <hr className="game__hr"></hr>
                {/* <div className="game__btn-container">
                  <button className="game__edit-btn">EDIT</button>
                </div> */}
              </div>
            );
          })}
          <CommentsSoccer eventId={this.props.match.params.id} />
        </div>
        <Footer />
      </>
    );
  }
}
