import React from "react";
import { Link } from "react-router-dom";

import profile from "../assets/icons/SVG/profile.svg";

export default function Header() {
  return (
    <header className="nav-bar" id="nav-bar">
      <div className="nav-bar__mobile">
        <div className="nav-bar__tablet">
          {/* Links to upload page when "upload" button is clicked and back to home page when logo is clicked. */}
          <Link to="/" className="nav-bar__logo-link">
            <h1 className="nav-bar__logo">JOGA</h1>
          </Link>
          <nav className="nav-bar__features">
            <div className="nav-bar__lower-row">
              <h4 className="nav-bar__welcome">Welcome,</h4>
              <img
                className="nav-bar__profile"
                src={profile}
                alt="User Profile"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
