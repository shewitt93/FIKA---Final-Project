import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/NavBar.css";
import { logout } from "../reducer/authReducer";

export default function NavBar() {
  return (
    <div className="navContainer">
      {" "}
      <div className="logo">FIKA</div>
      <nav>
        <NavLink className="navlink" to="/home">
          Dashboard
        </NavLink>
        <NavLink className="navlink" to="/home/chat">
          chat
        </NavLink>
        <NavLink className="navlink" to="/home/game">
          Game
        </NavLink>

        <NavLink onClick={() => logout()} className="navlink" to="/">
          Logout
        </NavLink>
      </nav>
    </div>
  );
}
