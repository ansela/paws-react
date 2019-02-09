import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";

import Header from "../components/Heading";

import Sitting1 from "../assets/sitting/sitting1.jpg";
import Sitting2 from "../assets/sitting/sitting2.jpg";
import Sitting3 from "../assets/sitting/sitting3.jpg";
import Sitting4 from "../assets/sitting/sitting4.jpg";
import Sitting5 from "../assets/sitting/sitting5.jpg";
import Sitting6 from "../assets/sitting/sitting6.jpg";
import Sitting7 from "../assets/sitting/sitting7.jpg";

const arr = [
  Sitting1,
  Sitting2,
  Sitting3,
  Sitting4,
  Sitting5,
  Sitting6,
  Sitting7
];

const Sitting = () => {
  return (
    <Container>
      <Header text="Pet Sitting" />
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
          <h2>
            New Consultations are <span style={{ color: "red" }}>FREE!</span>
          </h2>
          <h3>Pet sitting at your house</h3>
          <ul>
            <li>$10 per visit, each lasting approximately 25 minutes</li>
            <li>
              $80 overnight stay per day (10pm-7:30am) and includes two walks
              during the day
            </li>
          </ul>
          <p> Add on $15 for a 30 minute walk</p>
          <h4>Each visit includes:</h4>
          <ul>
            <li>Lots of love for your dog</li>
            <li>Plenty of time to go outside and relieve themselves</li>
            <li>Food and water change</li>
            <li>Brushings (if desired)</li>
            <li>Any medications given</li>
            <li>Bring in mail and newspaper</li>
            <li>Water any plants</li>
          </ul>
          <h3>Boarding at my house</h3>
          <p>
            I will only allow two to three dogs at a time at my house. I have
            two dogs and two cats who are dog friendly. If you don't want your
            dog to be with other animals please let me know
          </p>
          <ul>
            <li>$25 per night, $40 for two dogs, and $50 for three dogs</li>
            <li>$30 per day if you want your dog alone in my house</li>
          </ul>
          <h3>Board and train</h3>
          <p>
            Do you want your dog boarded and trained at the same time? Your dog
            can stay at my house while being trained at the same time!
          </p>
          <h4>Benefits of Board and Train:</h4>
          <ul>
            <li>Faster results</li>
            <li>Immersive learning</li>
            <li>Less stress on you</li>
            <li>Enhanced customization</li>
          </ul>
          <p>
            <strong>Price:</strong> $85 per night
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Sitting;
