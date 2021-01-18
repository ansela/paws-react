import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse
} from "reactstrap";

export default class Footer extends React.Component {
  state = { isOpen: false };

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
          Copyright © Anything Is Pawsible 2015-2021
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
