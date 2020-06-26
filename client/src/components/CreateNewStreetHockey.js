import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

export default class CreateNewStreetHockey extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/street-hockey", {
        // date: event.target.date.value,
        date: "06/25/2020",
        time: event.target.time.value,
        park: event.target.park.value,
        address: event.target.address.value,
        city: event.target.city.value,
        description: event.target.description.value,
        organizer: event.target.organizer.value,
        contact: event.target.contact.value,
        email: event.target.email.value,
      })
      .then(window.location.reload(false))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="modal">
        <div className="new">
          <h1 className="new__title">Create New Game</h1>
          <form className="new__form" onSubmit={this.handleSubmit}>
            <div className="new__form-flex">
              <label>DATE</label>
              <input
                className="new__form-input"
                type="text"
                name="date"
                placeholder="mm/dd/yyyy"
                required
              />
            </div>
            <div className="new__form-flex">
              <label>TIME</label>
              <input
                className="new__form-input"
                type="text"
                name="time"
                placeholder="Time of the game..."
                required
              />
            </div>
            <div className="new__form-flex">
              <label>LOCATION</label>
              <input
                className="new__form-input"
                name="park"
                placeholder="Name of park..."
                required
              />
            </div>
            <div className="new__form-flex">
              <label>ADDRESS</label>
              <input
                className="new__form-input"
                name="address"
                placeholder="Address of the park..."
                required
              />
            </div>
            <div className="new__form-flex">
              <label>CITY</label>
              <select name="city" className="new__form-input">
                <option>Vancouver, BC</option>
              </select>
            </div>

            <div className="new__form-flex">
              <label>ORGANIZER</label>
              {/* <input
                className="new__form-input"
                name="organizer"
                placeholder="Your name..."
                required
              /> */}
              <select name="organizer" className="new__form-input">
                <option>Steven</option>
              </select>
            </div>
            <div className="new__form-flex">
              <label>CONTACT</label>
              <input
                className="new__form-input"
                name="contact"
                placeholder="Phone number..."
                required
              />
            </div>
            <div className="new__form-flex">
              <label>EMAIL</label>
              <input
                className="new__form-input"
                name="email"
                placeholder="(Optional)"
              />
            </div>
            <div className="new__form-flex">
              <label>DESCRIPTION</label>
              <textarea
                className="new__form-description"
                name="description"
                rows="10"
                cols="50"
                placeholder="Leave a brief description (ex. # of players looking for, intensity, etc.)"
                required
              ></textarea>
            </div>
            <div className="button__container">
              <button className="button__save">POST</button>
              {/* <Link to="/street-hockey"> */}
              {/* <button className="button__cancel">CANCEL</button> */}
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
