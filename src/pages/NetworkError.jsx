import React from "react";
import { Container, Button } from "reactstrap";

/**
 * This component is used when a route is not found
 */
const NetworkError = ({ history }) => {
  const goHome = () => history.push("/");

  return (
    <Container>
      <h2>Sorry, there was a problem connecting. Please try again!</h2>
      <Button onClick={goHome}>Go Home</Button>
    </Container>
  );
};

export default NetworkError;
