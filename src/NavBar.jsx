import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

import logo from "./assets/header2.png";

class NavBar extends React.Component {
  state = { isOpen: false };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    return (
      <Navbar color="light" light expand="md" fixed="top" className="paws-nav">
        <NavbarBrand href="/">
          <img src={logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">
                <span className="fas fa-star" />
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/training">Training</Link>
            </NavItem>
            <NavItem>
              <Link to="/sitting">Sitting</Link>
            </NavItem>
            <NavItem>
              <Link to="/reviews">Reviews</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
