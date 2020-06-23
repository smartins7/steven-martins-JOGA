import React from "react";
import axios from "axios";
import profile from "../assets/icons/SVG/profile.svg";

export default function CommentsSoccer(props) {
  const messageSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/soccer/${props.eventId}`, {
        time: new Date(),
        name: "Steven",
        comment: event.target.commentsComment.value,
      })
      .then((res) => {
        // console.log(res);
        // props.history.replace("/");
        window.location.reload();
        event.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="comments">
      {/* {this.state.soccerList.map((soccer) => { */}
      <h1 className="comments__title">Messages</h1>
      <div className="comments__container">
        <form
          id="comments-form"
          className="comments-form"
          onSubmit={messageSubmit}
        >
          <div className="comments-form__tablet">
            <div className="comments-form__row-one">
              <img
                className="comments-form__profile"
                src={profile}
                alt="User Profile"
              />
              <div className="comments-form__input-details">
                {/* <label className="comments-form__input-title">
                  MESSAGE THE ORGANIZER
                </label> */}
                <textarea
                  type="text"
                  id="comments-content-input"
                  placeholder="Message the organizer..."
                  className="comments-form__content"
                  name="commentsComment"
                ></textarea>
              </div>
            </div>

            <br />
            <button type="submit" className="comments-form__submit">
              MESSAGE
            </button>
          </div>
        </form>
      </div>
      {/* <div className="comments__messages">
        <span className="comments__messages--new">{soccer.messages}</span>
      </div>  */}
      {/* })} */}
    </div>
  );
}
