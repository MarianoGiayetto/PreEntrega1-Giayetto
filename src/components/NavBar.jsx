import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.css";
import CartWidget from "./CartWidget";
export default function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src="../Logo_Detail_Garage_invertido.png"
              width="130"
              height="140"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className="navbar__link" to="/category/shampoos">
                Shampoos
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar__link" to="/category/ceras">
                Ceras
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar__link" to="/category/cepillos">
                Cepillos
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar__link" to="/category/microfibras">
                Microfibras
              </NavLink>
            </Nav.Link>
          </Nav>
          <NavLink className="navbar__link" to="/cart">
            {CartWidget}
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
