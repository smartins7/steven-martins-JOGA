import React from "react";
import { Link } from "react-router-dom";

import add from "../assets/icons/SVG/addnew.svg";
import basketball from "../assets/icons/SVG/basketball.svg";
import hockey from "../assets/icons/SVG/hockey.svg";

export default function FooterSoccer(props) {
  const newGameClick = (event) => {
    props.setFormState();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/basketball" className="footer__links--basketball">
          <div className="footer__links">
            <img
              className="footer__icons"
              src={basketball}
              alt="Basketball Icon"
            />
            <span className="footer__icons-names">BASKETBALL</span>
          </div>
        </Link>
        {/* <Link to="/soccer" className="footer__links--soccer"> */}
        <div className="footer__links">
          <div className="add-new" onClick={newGameClick}>
            <img className="footer__icons" src={add} alt="Add New Icon" />
            <span className="footer__icons-names">ADD NEW</span>
          </div>
        </div>
        {/* </Link> */}
        <Link to="/street-hockey" className="footer__links--street-hockey">
          <div className="footer__links">
            <img
              className="footer__icons"
              src={hockey}
              alt="Street-Hockey Icon"
            />
            <span className="footer__icons-names">STREET-HOCKEY</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}
