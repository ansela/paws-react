import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import { Link } from "react-router-dom";

import Header from "../components/Heading";

import Home1 from "../assets/home/home1.jpg";
import Home4 from "../assets/home/home4.jpg";
import Home3 from "../assets/home/home3.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid className="home-content">
        <Header text="Welcome" />
        <Row>
          <Col sm="12" md="4">
            <Link to="/sitting">
              <img src={Home4} alt="" className="home-content__image" />
              <h2>Pet Sitting</h2>
            </Link>
            <p>
              Enjoy being out of town knowing that your pet is in the loving
              hands of Melissa! Choices include pet sitting at your home or in
              my own!
            </p>
          </Col>
          <Col sm="12" md="4">
            <Link to="/training">
              <img src={Home3} alt="" className="home-content__image" />
              <h2>Dog Training</h2>
            </Link>
            <p>
              Group classes and private lessons are available for you! Teach
              your puppy or dog some tricks or work on some problem behaviors
              your dog may have.
            </p>
          </Col>
          <Col sm="12" md="4">
            <Link to="/about">
              <img src={Home1} alt="" className="home-content__image" />
              <h2>About Missy</h2>
            </Link>
            <p>
              Have your dog come over to my house for some playtime with a small
              group of dogs or have your dogs walked around your neighborhood!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
