import React, { Component } from "react";
import axios from "axios";
// import Switch from "react-switch";

export default class CreateNewSoccer extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      soccer: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/soccer")
      .then((response) => {
        this.setState({
          soccer: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  closeModal = (event) => {
    let newGameObject = document.getElementsByClassName("new-game")[0];
    newGameObject.style.display = "none";
    this.clearForm();
  };
  saveItem = (event) => {
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let park = document.getElementById("park").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let description = document.getElementById("description").value;
    let organizer = document.getElementById("organizer").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;
    let newGameRequest = {
      date: date,
      time: time,
      park: park,
      address: address,
      city: city,
      description: description,
      organizer: organizer,
      contact: contact,
      email: email,
    };
    axios
      .post("http://localhost:5000/soccer", newGameRequest)
      .then((response) => {
        this.closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  clearForm() {
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("park").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("description").value = "";
    document.getElementById("organizer").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";
  }
  render() {
    return (
      <div className="new-game">
        <div className="new-game__container">
          <h1 className="new-game__title">Create New Game</h1>

          <ul className="new-game__list">
            <li className="new-game__input">
              <p className="new-game__input--title">DATE</p>
              <input
                className="new-game__input--content"
                type="text"
                id="date"
                placeholder="mm-dd-yyyy"
              />
            </li>
            <li className="new-game__input">
              <p className="new-game__input--title">TIME</p>
              <input
                className="new-game__input--content"
                type="text"
                id="time"
                placeholder="Time of the game..."
              />
            </li>
            <li className="new-game__input">
              <p className="new-game__input--title">LOCATION</p>
              {/* <select className="new-game__input--content-select" id="location">
                {this.state.locations.map((location) => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.location}
                    </option>
                  );
                })}
              </select> */}
            </li>
            <li className="new-game__input">
              <p className="new-game__input--title">ADDRESS</p>
              <input
                className="new-game__input--content"
                type="text"
                placeholder="Address of the park..."
              />
            </li>
            <li className="new-game__input">
              <p className="new-game__input--title">GAME DESCRIPTION</p>
              <textarea
                className="new-game__input--content-text"
                name="new-game__input--content"
                id="description"
                // placeholder="(Optional)"
                placeholder="Leave a brief description (ex. # of players looking, intensity, etc.)"
              ></textarea>
            </li>
            {/* <li className="new-game__input">
              <p className="new-game__input--title">STATUS</p>
              <div className="label__wrapper">
                <label className="label">
                  In Stock
                  <Switch
                    id="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </label>
              </div>
            </li> */}
            <li className="new-game__input">
              <p className="new-game__input--title">ORGANIZER</p>
              <input
                className="new-game__input--content"
                type="text"
                placeholder="Your name..."
              />
            </li>
            <li className="new-game__input">
              <p className="new-game__input--title">CONTACT</p>
              <input
                className="new-game__input--content"
                type="text"
                placeholder="Phone number..."
              />
            </li>
            <li className="new-game__input">
              <p className="new-game__input--title">EMAIL</p>
              <input
                className="new-game__input--content"
                type="text"
                placeholder="(Optional)"
              />
            </li>
          </ul>

          <div className="new-game__cta">
            <button className="new-game__cta--save" onClick={this.saveItem}>
              SAVE
            </button>
            <button className="new-game__cta--cancel" onClick={this.closeModal}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    );
  }
}
