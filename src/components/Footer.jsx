import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Footer = () => (
  <Navbar color="light" light fixed="bottom" className="paws-footer">
    <NavbarBrand className="paws-footer__brand">
      Copyright © Anything Is Pawsible 2015-2019
    </NavbarBrand>
    <NavbarBrand className="paws-footer__brand">
      <a href="mailto:ashley.ansell@gmail.com">Webmaster</a>
    </NavbarBrand>
  </Navbar>
);

export default Footer;
