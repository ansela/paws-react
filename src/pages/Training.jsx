import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Header from "../components/Heading";

import Training1 from "../assets/training/training1.jpg";
import Training2 from "../assets/training/training2.jpg";
import Training3 from "../assets/training/training3.jpg";
import Training4 from "../assets/training/training4.jpg";

const arr = [Training1, Training2, Training3, Training4];

const Training = () => {
  return (
    <Container>
      <Header text="Dog Training" />
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
            I would love to help you with any problems with your dogs, whether
            you want your dog to learn basic obedience or help with problem
            behaviors The benefits of having a trained dog are nearly limitless!
            From the moment you get your new puppy, he will need to start
            learning wrong from right from you!
          </p>
          <h3>Benefits of Dog Training</h3>
          <ul>
            <li>
              Puppy classes allow you to start your bond off to a good start.
              Training will allow your puppy to interact with people, other
              puppies and new experiences in a save environment
            </li>
            <li>
              Socializing your puppy at a yound age is important to allow your
              dog to before a well balanced adult
            </li>
            <li>
              You will learn simple solutions to common problems most dogs have
            </li>
            <li>
              Traning provides your dog with basic manners including polite
              greetings and walking nicely
            </li>
            <li>
              A trained dog can be someone that your whole family can enjoy by
              going for walks, hikes, swim, and visiting friends and family
            </li>
            <li>
              Training has been shown to be the single most important thing that
              keeps a dog in his or her "forever" home
            </li>
            <li>Training a dog forms a bond between you and your dog!</li>
          </ul>
          <h3>Private Lessons</h3>
          <h4>
            New Consultations are <span style={{ color: "red" }}>FREE!</span>
          </h4>
          <p>
            Customized private training is conducted in your home, and lasts
            approximately 60 minutes per session. In contrast to traditional
            group classes, my focus is solely on you and your dog. This means we
            move at your pace and target the skills and behaviors that are
            important to you. Private lessons are conducted on a one-on-one
            basis with Missy, which provides for an optimal learning
            environment.
          </p>
          <p>
            <strong>Location:</strong> Your home
          </p>
          <p>
            <strong>Price:</strong> $70/hour
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          Please feel free to e-mail or call me by going to the{" "}
          <Link to="/contact">contact</Link> page.
        </Col>
      </Row>
    </Container>
  );
};

export default Training;
