import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "reactstrap";

import Header from "./Heading";

import About1 from "./assets/about/about1.jpg";
import About2 from "./assets/about/about2.jpg";
import About3 from "./assets/about/about3.jpg";
import About4 from "./assets/about/about4.jpg";

const arr = [About1, About2, About3, About4];

const About = () => {
  return (
    <Container>
      <Header text="About Missy" />
      <Row>
        <Col md="4" sm="12">
          <Carousel infiniteLoop showThumbs={false} dynamicHeight autoPlay>
            {arr.map((img, i) => (
              <div key={i}>
                <img src={img} alt="" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col md="8" sm="12">
          <p>
            Melissa Ansell has been a lover of animals ever since she was a
            young child. As she grew up, she not only helped out her fellow
            neighbors with their pets, she has also helped many homeless pets.
            She graduated from Niagara University in 2010 with a Bachelor's in
            Biology, then proceeded to go to Bergin University to earn an
            Associate's degree in Business and Companion Dog Studies. She
            learned a lot, including service dog training, pet dog training,
            working with shelter dogs, scent detection, agility, and breeding
            and whelping. She has worked at two different kennels and
            volunteered at numerous shelters. She has a lot of love for animals
            and would like to spread her love to your pets.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
