import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import firebase from "./firebase";
function Header() {
  const auth = firebase.auth();
  const { user } = useState();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">My Profile Page</div>
      </Link>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
              {/* user?.email || 'Guest'*/}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
