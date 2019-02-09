import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse
} from "reactstrap";

import StyledLink from "../components/StyledLink";

export default class Footer extends React.Component {
  state = { isOpen: false };

  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    return (
      <Navbar
        color="light"
        light
        expand="md"
        fixed="bottom"
        className="paws-footer"
      >
        <NavbarBrand className="paws-footer__brand">
          Copyright © Anything Is Pawsible 2015-2019
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {localStorage.getItem("jwtToken") && (
              <NavItem>
                <button
                  title="Log out"
                  style={{ backgroundColor: "transparent", border: "none" }}
                  className="nav-link"
                  onClick={this.logout}
                >
                  <span class="fas fa-sign-out-alt" />
                </button>
              </NavItem>
            )}
            <NavItem>
              <StyledLink to="/admin">
                <span className="fas fa-cog" />
              </StyledLink>
            </NavItem>
            <NavItem>
              <a
                href="mailto:ashley.ansell@gmail.com"
                title="Contact Admin"
                className="nav-link"
              >
                <span className="fas fa-envelope" />
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
