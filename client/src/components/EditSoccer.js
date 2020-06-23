import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class SoccerDetails extends Component {
  //   state = {
  //     game: [],
  //   };
  //   componentDidMount() {
  //     const id = this.props.match.params.id;
  //     axios
  //       .get("http://localhost:5000/soccer")
  //       .then((response) => {
  //         const res = response.data.filter((event) => {
  //           return event.gameId === id;
  //         });
  //         this.setState({
  //           game: res,
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }

  handleSubmit(event) {
    const id = this.props.match.params.id;
    event.preventDefault();
    axios
      .put(`http://localhost:5000/soccer/${id}`, {
        date: event.target.date.value,
        time: event.target.time.value,
        park: event.target.park.value,
        address: event.target.address.value,
        city: event.target.city.value,
        description: event.target.description.value,
        organizer: event.target.organizer.value,
        eventStatus: "Vacant",
        contact: event.target.contact.value,
        email: event.target.email.value,
      })
      .then(window.location.reload(false))
      //How do I ge back to main bage after submit?
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header />
        <div className="edit">
          <div className="new">
            <h1 className="new__title">Edit Game Details</h1>
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
              <div className="new__form-flex margin">
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
              <div className="new__form-flex margin">
                <label>CITY</label>
                <select name="city" className="new__form-input">
                  <option>Vancouver, BC</option>
                </select>
              </div>

              <div className="new__form-flex">
                <label>ORGANIZER</label>
                <input
                  className="new__form-input"
                  name="organizer"
                  placeholder="Your name..."
                  required
                />
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
                <button className="button__save">SUBMIT</button>
                {/* <Link to="/soccer"> */}
                <button className="button__cancel">BACK</button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
