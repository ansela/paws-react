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

import logo from "../assets/header2.png";

const StyledLink = ({ to, children }) => (
  <Link to={to} className="nav-link">
    {children}
  </Link>
);

class NavBar extends React.Component {
  state = { isOpen: false };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    return (
      <Navbar color="light" light expand="md" fixed="top" className="paws-nav">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="paws-nav__brand" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <StyledLink to="/">
                <span className="fas fa-home" /> Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/about">
                <span className="fas fa-shield-alt" /> About
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/training">
                <span className="fas fa-dog" /> Training
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/sitting">
                <span className="fas fa-cat" /> Sitting
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/reviews">
                <span className="fas fa-comment" /> Reviews
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/contact">
                <span className="fas fa-pen" /> Contact
              </StyledLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
