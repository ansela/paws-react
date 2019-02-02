import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";

import StyledLink from "../components/StyledLink";

const Footer = () => (
  <Navbar
    color="light"
    light
    expand="sm"
    fixed="bottom"
    className="paws-footer"
  >
    <NavbarBrand className="paws-footer__brand">
      Copyright © Anything Is Pawsible 2015-2019
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
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
  </Navbar>
);

export default Footer;
