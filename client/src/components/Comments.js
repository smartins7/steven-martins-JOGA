import React from "react";
import profile from "../assets/icons/SVG/profile.svg";

export default function Comments() {
  return (
    <div className="comments">
      <h1 className="comments__title">Messages</h1>
      <div className="comments__container">
        <form id="comments-form" className="comments-form">
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
    </div>
  );
}
