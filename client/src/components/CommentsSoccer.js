import React from "react";
import axios from "axios";
import profile from "../assets/icons/SVG/profile.svg";

export default function CommentsSoccer(props) {
  const messageSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/soccer/${props.eventId}`, {
        // time: new Date(),
        name: "Steven",
        time: "06/29/2020",
        comment: event.target.commentsComment.value,
      })
      .then((res) => {
        window.location.reload();
        event.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="comments">
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
    </div>
  );
}
