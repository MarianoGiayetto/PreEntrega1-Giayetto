import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.css";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          src="../Logo_Detail_Garage_invertido.png"
          width="100"
          height="110"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </NavLink>
      <NavLink className="navbar-link" to="/category/shampoos">
        Shampoos
      </NavLink>
      <NavLink className="navbar-link" to="/category/ceras">
        Ceras
      </NavLink>
      <NavLink className="navbar-link" to="/category/cepillos">
        Cepillos
      </NavLink>
      <NavLink className="navbar-link" to="/category/microfibras">
        Microfibras
      </NavLink>
      <NavLink className="navbar-link" to="/cart">
        {CartWidget}
      </NavLink>

    </div>
  );
}
