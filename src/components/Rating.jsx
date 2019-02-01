import React from "react";
import PropTypes from "prop-types";

const Rating = ({ stars }) => {
  const fullStars = new Array(Math.floor(stars)).fill(0);
  const emptyStars = new Array(5 - Math.ceil(stars)).fill(0);
  const isInteger = Number.isInteger(stars);

  return (
    <>
      {fullStars.map((_item, i) => (
        <span className="fas fa-star paws-rating" />
      ))}
      {!isInteger && <span className="fas fa-star-half-alt paws-rating" />}
      {emptyStars.map((_item, i) => (
        <span key={i} className="far fa-star paws-rating" />
      ))}
    </>
  );
};

Rating.propTypes = {
  stars: PropTypes.number.isRequired
};

export default Rating;
