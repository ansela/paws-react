import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./Heading";
import Map from "./assets/contact/areaOfService.jpg";

const Contact = () => (
  <Container>
    <Header text="Contact" />
    <Row>
      <Col md="6">
        <ul style={{ listStyleType: "none" }}>
          <li>facebook</li>
          <li>twitter</li>
          <li>instagram</li>
          <li>anythingispawsible33@yahoo.com</li>
          <li>(904) 373-5097</li>
        </ul>
      </Col>
      <Col md="6">
        <img src={Map} alt="Map of service area" style={{ maxWidth: "100%" }} />
      </Col>
    </Row>
  </Container>
);

export default Contact;
