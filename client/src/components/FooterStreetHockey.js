import React from "react";
import { Link } from "react-router-dom";

import soccer from "../assets/icons/SVG/soccer.svg";
import basketball from "../assets/icons/SVG/basketball.svg";
import add from "../assets/icons/SVG/addnew.svg";

export default function FooterStreetHockey(props) {
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
      </div>
    </footer>
  );
}
