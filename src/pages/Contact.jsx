import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "../components/Heading";

import Map from "../assets/contact/areaOfService.jpg";

const Contact = () => (
  <Container>
    <Header text="Contact" />
    <Row>
      <Col md="6">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <span className="fab fa-facebook-square" />{" "}
            <a
              href="https://www.facebook.com/anythingispawsible33"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          </li>
          <li>
            <span className="fab fa-twitter-square" />{" "}
            <a
              href="https://twitter.com/IsPawsible"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
          <li>
            <span className="fab fa-instagram" />{" "}
            <a
              href="https://instagram.com/anythingispawsible/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
          <li>
            <span className="fas fa-envelope" />{" "}
            <a href="mailto:anythingispawsible33@yahoo.com">
              anythingispawsible33@yahoo.com
            </a>
          </li>
          <li>
            <span className="fa fa-phone" /> (904) 373-5097
          </li>
        </ul>
      </Col>
      <Col md="6">
        <img src={Map} alt="Map of service area" style={{ maxWidth: "100%" }} />
      </Col>
    </Row>
  </Container>
);

export default Contact;
