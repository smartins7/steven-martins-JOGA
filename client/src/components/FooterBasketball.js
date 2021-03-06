import React from "react";
import { Link } from "react-router-dom";

import soccer from "../assets/icons/SVG/soccer.svg";
import add from "../assets/icons/SVG/addnew.svg";
import hockey from "../assets/icons/SVG/hockey.svg";

export default function FooterBasketball(props) {
  const newGameClick = (event) => {
    props.setFormState();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/soccer" className="footer__links--soccer">
          <div className="footer__links">
            <img className="footer__icons" src={soccer} alt="Soccer Icon" />
            <span className="footer__icons-names">SOCCER</span>
          </div>
        </Link>
        <div className="footer__links">
          <div className="add-new" onClick={newGameClick}>
            <img className="footer__icons" src={add} alt="Add New Icon" />
            <span className="footer__icons-names">ADD NEW</span>
          </div>
        </div>
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
