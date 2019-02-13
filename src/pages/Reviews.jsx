import React from "react";
import { Container, Alert } from "reactstrap";

import Review from "../components/Review";
import Header from "../components/Heading";

/**
 * @typedef {Object} Review
 * @property {string} name - The name of the reviewer
 * @property {number} stars - The number of stars given. Valid values: 0.5-5, increments of 0.5
 * @property {string} text - the free text contents of the review
 */
const reviews = [
  // {
  //   name: "Ashley N.",
  //   stars: 4.5,
  //   text:
  //     "WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs. WOW! This dog sitter is the bomb. She really loves and cares for my dogs."
  // },
  // {
  //   name: "Schwartzy",
  //   stars: 5,
  //   text: "Bark Bark"
  // },
  // {
  //   name: "Bean",
  //   stars: 2.5
  // }
];

const Reviews = () => {
  return (
    <Container>
      <Header text="Reviews" />
      {reviews.length > 0 ? (
        reviews.map((review, i) => (
          <Review name={review.name} stars={review.stars} text={review.text} />
        ))
      ) : (
        <Alert color="light">
          There are currently no reviews, please check back again soon!
        </Alert>
      )}
    </Container>
  );
};

export default Reviews;
