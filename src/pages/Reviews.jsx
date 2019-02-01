import React from "react";
import { Container, Row, Col } from "reactstrap";

import Review from "../components/Review";

const reviews = [
  {
    name: "Ashley N.",
    stars: 4.5,
    text:
      "WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs."
  },
  {
    name: "Schwartzy",
    stars: 5,
    text: "Bark Bark"
  },
  {
    name: "Bean",
    stars: 2.5
  }
];

const Reviews = () => (
  <Container>
    {reviews.map((review, i) => (
      <Review name={review.name} stars={review.stars} text={review.text} />
    ))}
  </Container>
);

export default Reviews;
