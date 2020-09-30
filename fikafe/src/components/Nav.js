import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/NavBar.css";
import { logout } from "../reducer/authReducer";

export default function NavBar() {
  return (
    <div className="navContainer">
      {" "}
      <h1 className="logo">FIKA</h1>
      <nav>
        <NavLink className="navlink" to="/home">
          HOME
        </NavLink>
        <NavLink className="navlink" to="/home/chat">
          CHAT
        </NavLink>
        <NavLink className="navlink" to="/home/game">
          GAME
        </NavLink>
        {/* <NavLink className="navlink" to="/home/settings">
          SETTINGS
        </NavLink> */}

        <NavLink onClick={() => logout()} className="navlink" to="/">
          LOGOUT
        </NavLink>
      </nav>
    </div>
  );
}
