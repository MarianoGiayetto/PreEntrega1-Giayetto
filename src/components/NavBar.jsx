import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../hojas_de_estilo/Navbar.css";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink to="/">
          <img
            src="../Logo_Detail_Garage_invertido.png"
            width="100"
            height="110"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}
