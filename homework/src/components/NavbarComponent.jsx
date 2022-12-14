import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatar from "../netflix/assets/avatar.png";
import logo from "../netflix/assets/netflix_logo.png";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="nextflix-logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Nav.Link id="navbar-text" href="#features">
                Home
              </Nav.Link>
            </Link>
            <Link to="/tv-shows">
              <Nav.Link id="navbar-text" href="#pricing">
                Tv Shows
              </Nav.Link>
            </Link>

            <Nav.Link id="navbar-text" href="#features">
              Movies
            </Nav.Link>
            <Nav.Link id="navbar-text" href="#features">
              Recently Added
            </Nav.Link>
            <Nav.Link id="navbar-text" href="#features">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-right-logo">
          <CiSearch id="navbar-text" />
          <Nav.Link id="navbar-text" href="#features">
            KIDS
          </Nav.Link>
          <AiOutlineBell id="navbar-text" />
          <div>
            <Button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={avatar} alt="avatar-image" id="avatar" />
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
