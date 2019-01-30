import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Footer = () => (
  <Navbar color="light" light fixed="bottom" className="paws-footer">
    <NavbarBrand className="paws-footer__brand">
      Copyright © Anything Is Pawsible 2015-2019
    </NavbarBrand>
  </Navbar>
);

export default Footer;
