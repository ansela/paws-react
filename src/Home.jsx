import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";

import Header from "./Heading";

import Home1 from "./assets/home/home1.jpg";
import Home4 from "./assets/home/home4.jpg";
import Home3 from "./assets/home/home3.jpg";

const Home = () => {
  return (
    <Container className="home-content">
      <Header text="Welcome" />
      <Row>
        <Col sm="12" md="4">
          <img src={Home4} alt="" className="home-content__image" />
          <h2>Pet Sitting</h2>
          <p>
            Enjoy being out of town knowing that your pet is in the loving hands
            of Melissa! Choices include pet sitting at your home or in my own!
          </p>
        </Col>
        <Col sm="12" md="4">
          <img src={Home3} alt="" className="home-content__image" />
          <h2>Dog Training</h2>
          <p>
            Group classes and private lessons are available for you! Teach your
            puppy or dog some tricks or work on some problem behaviors your dog
            may have.
          </p>
        </Col>
        <Col sm="12" md="4">
          <img src={Home1} alt="" className="home-content__image" />
          <h2>About Missy</h2>
          <p>
            Have your dog come over to my house for some playtime with a small
            group of dogs or have your dogs walked around your neighborhood!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
