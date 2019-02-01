import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

import Rating from "./Rating";

const Review = ({ name, stars, text }) => (
  <Card className="paws-review">
    <CardHeader>{name}</CardHeader>
    <CardBody>
      <CardTitle>
        <Rating stars={stars} />
      </CardTitle>
      <CardText>{text}</CardText>
    </CardBody>
    <CardFooter>Was this review helpful? </CardFooter>
  </Card>
);

Review.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  text: PropTypes.string
};

Review.defaultProps = {
  text: ""
};

export default Review;
